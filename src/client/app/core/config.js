// (function() {
//   'use strict';

//   var core = angular.module('app.core');

//   core.config(toastrConfig);

//   toastrConfig.$inject = ['toastr'];
//   /* @ngInject */
//   function toastrConfig(toastr) {
//     toastr.options.timeOut = 4000;
//     toastr.options.positionClass = 'toast-bottom-right';
//   }

//   var config = {
//     appErrorPrefix: '[angle Error] ',
//     appTitle: 'angle'
//   };

//   core.value('config', config);

//   core.config(configure);

//   configure.$inject = ['$logProvider', 'routerHelperProvider', 'exceptionHandlerProvider'];
//   /* @ngInject */
//   function configure($logProvider, routerHelperProvider, exceptionHandlerProvider) {
//     if ($logProvider.debugEnabled) {
//       $logProvider.debugEnabled(true);
//     }
//     exceptionHandlerProvider.configure(config.appErrorPrefix);
//     routerHelperProvider.configure({ docTitle: config.appTitle + ': ' });
//   }

// })();
(function() {
  'use strict';

  angular
      .module('app.core')
      .config(coreConfig);

  coreConfig.$inject = ['$controllerProvider', '$compileProvider', '$filterProvider', '$provide', '$animateProvider'];
  function coreConfig($controllerProvider, $compileProvider, $filterProvider, $provide, $animateProvider){

    var core = angular.module('app.core');
    // registering components after bootstrap
    core.controller = $controllerProvider.register;
    core.directive  = $compileProvider.directive;
    core.filter     = $filterProvider.register;
    core.factory    = $provide.factory;
    core.service    = $provide.service;
    core.constant   = $provide.constant;
    core.value      = $provide.value;

    // Disables animation on items with class .ng-no-animation
    $animateProvider.classNameFilter(/^((?!(ng-no-animation)).)*$/);

    // Improve performance disabling debugging features
    // $compileProvider.debugInfoEnabled(false);

  }

})();