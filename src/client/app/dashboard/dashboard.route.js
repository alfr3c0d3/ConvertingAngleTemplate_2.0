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


(function () {
    'use strict';

    angular
        .module('app.dashboard')
        .config(routesConfig);

    routesConfig.$inject = ['$stateProvider', 'RouteHelpersProvider'];
    function routesConfig($stateProvider, helper) {

        $stateProvider
            .state('app.dashboard', {
                url: '/dashboard',
                title: 'Dashboard',
                templateUrl: helper.basepath('dashboard', 'dashboard.html'),
                resolve: helper.resolveFor('flot-chart', 'flot-chart-plugins', 'weather-icons')
            })
            .state('app.dashboard_v2', {
                url: '/dashboard_v2',
                title: 'Dashboard v2',
                templateUrl: helper.basepath('dashboard', 'dashboard.v2.html'),
                controller: 'DashboardV2Controller',
                controllerAs: 'dash2',
                resolve: helper.resolveFor('flot-chart', 'flot-chart-plugins')
            })
            .state('app.dashboard_v3', {
                url: '/dashboard_v3',
                title: 'Dashboard v3',
                controller: 'DashboardV3Controller',
                controllerAs: 'dash3',
                templateUrl: helper.basepath('dashboard', 'dashboard.v3.html'),
                resolve: helper.resolveFor('flot-chart', 'flot-chart-plugins', 'vector-map', 'vector-map-maps')
            })
            .state('app-h.dashboard_v2', {
                url: '/dashboard_v2',
                title: 'Dashboard v2',
                templateUrl: helper.basepath('dashboard', 'dashboard.v2.html'),
                controller: 'DashboardV2Controller',
                controllerAs: 'dash2',
                resolve: helper.resolveFor('flot-chart', 'flot-chart-plugins')
            });
    }
})();
