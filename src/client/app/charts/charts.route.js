(function () {
    'use strict';

    angular
        .module('app.charts')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates(routerHelper));
    }

    function getStates(routerHelper) {
        return [
            {
                state: 'app.chart-flot',
                config: {
                    url: '/chart-flot',
                    title: 'Chart Flot',
                    templateUrl: routerHelper.basepath('charts', 'chart-flot.html'),
                    resolve: routerHelper.resolveFor('flot-chart', 'flot-chart-plugins')
                }
            },
            {
                state: 'app.chart-radial',
                config: {
                    url: '/chart-radial',
                    title: 'Chart Radial',
                    templateUrl: routerHelper.basepath('charts', 'chart-radial.html'),
                    resolve: routerHelper.resolveFor('ui.knob', 'easypiechart')
                }
            },
            {
                state: 'app.chart-js',
                config: {
                    url: '/chart-js',
                    title: 'Chart JS',
                    templateUrl: routerHelper.basepath('charts', 'chart-js.html'),
                    resolve: routerHelper.resolveFor('chart.js')
                }
            },
            {
                state: 'app.chart-rickshaw',
                config: {
                    url: '/chart-rickshaw',
                    title: 'Chart Rickshaw',
                    templateUrl: routerHelper.basepath('charts', 'chart-rickshaw.html'),
                    resolve: routerHelper.resolveFor('angular-rickshaw')
                }
            },
            {
                state: 'app.chart-morris',
                config: {
                    url: '/chart-morris',
                    title: 'Chart Morris',
                    templateUrl: routerHelper.basepath('charts', 'chart-morris.html'),
                    resolve: routerHelper.resolveFor('morris')
                }
            },
            {
                state: 'app.chart-chartist',
                config: {
                    url: '/chart-chartist',
                    title: 'Chart Chartist',
                    templateUrl: routerHelper.basepath('charts', 'chart-chartist.html'),
                    resolve: routerHelper.resolveFor('angular-chartist')
                }
            }
        ];
    }
})();
