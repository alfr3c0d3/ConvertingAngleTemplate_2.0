(function () {
    'use strict';

    angular
        .module('app.dashboard')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates(routerHelper));
    }

    function getStates(routerHelper) {
        return [
            {
                state: 'app.dashboard',
                config: {
                    url: '/dashboard',
                    title: 'Dashboard',
                    templateUrl: routerHelper.basepath('dashboard', 'dashboard.html'),
                    resolve: routerHelper.resolveFor('flot-chart', 'flot-chart-plugins', 'weather-icons')
                }
            },
            {
                state: 'app.dashboard_v2',
                config: {
                    url: '/dashboard_v2',
                    title: 'Dashboard v2',
                    templateUrl: routerHelper.basepath('dashboard', 'dashboard.v2.html'),
                    controller: 'DashboardV2Controller',
                    controllerAs: 'dash2',
                    resolve: routerHelper.resolveFor('flot-chart', 'flot-chart-plugins')
                }
            },
            {
                state: 'app.dashboard_v3',
                config: {
                    url: '/dashboard_v3',
                    title: 'Dashboard v3',
                    controller: 'DashboardV3Controller',
                    controllerAs: 'dash3',
                    templateUrl: routerHelper.basepath('dashboard', 'dashboard.v3.html'),
                    resolve: routerHelper.resolveFor('flot-chart', 'flot-chart-plugins', 'vector-map', 'vector-map-maps')
                }
            },
            {
                state: 'app-h.dashboard_v2',
                config: {
                    url: '/dashboard_v2',
                    title: 'Dashboard v2',
                    templateUrl: routerHelper.basepath('dashboard', 'dashboard.v2.html'),
                    controller: 'DashboardV2Controller',
                    controllerAs: 'dash2',
                    resolve: routerHelper.resolveFor('flot-chart', 'flot-chart-plugins')
                }
            }
        ];
    }
})();
