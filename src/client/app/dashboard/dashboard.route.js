// (function() {
//     'use strict';
  
//     angular
//       .module('app.dashboard')
//       .run(appRun);
  
//     appRun.$inject = ['$stateProvider', 'RouteHelpers'];
//     /* @ngInject */
//     function appRun($stateProvider, helper) {
//       $stateProvider
//           .state('app.dashboard', {
//               url: '/dashboard',
//               title: 'Dashboard',
//               templateUrl: helper.basepath('dashboard.html'),
//               resolve: helper.resolveFor('flot-chart','flot-chart-plugins', 'weather-icons')
//           })
//     }
  
//     // function getStates() {
//     //   return [
//     //     {
//     //       state: 'app.dashboard',
//     //       config: {
//     //         url: '/dashboard',
//     //         title: 'Dashboard',
//     //         templateUrl: helper.basepath('dashboard.html'),
//     //         resolve: helper.resolveFor('flot-chart','flot-chart-plugins', 'weather-icons')
//     //         // settings: {
//     //         //   nav: 2,
//     //         //   content: '<i class="fa fa-lock"></i> Admin'
//     //         // }
//     //       }
//     //     }
//     //   ];
//     // }
//   })();
