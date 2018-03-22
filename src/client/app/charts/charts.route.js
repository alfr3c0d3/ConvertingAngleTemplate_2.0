(function () {
    'use strict';

    angular
        .module('app.charts')
        .config(routesConfig);

    routesConfig.$inject = ['$stateProvider', 'RouteHelpersProvider'];
    function routesConfig($stateProvider, helper) {

        $stateProvider
            .state('app.chart-flot', {
                url: '/chart-flot',
                title: 'Chart Flot',
                templateUrl: helper.basepath('charts', 'chart-flot.html'),
                resolve: helper.resolveFor('flot-chart', 'flot-chart-plugins')
            })
            .state('app.chart-radial', {
                url: '/chart-radial',
                title: 'Chart Radial',
                templateUrl: helper.basepath('charts', 'chart-radial.html'),
                resolve: helper.resolveFor('ui.knob', 'easypiechart')
            })
            .state('app.chart-js', {
                url: '/chart-js',
                title: 'Chart JS',
                templateUrl: helper.basepath('charts', 'chart-js.html'),
                resolve: helper.resolveFor('chart.js')
            })
            .state('app.chart-rickshaw', {
                url: '/chart-rickshaw',
                title: 'Chart Rickshaw',
                templateUrl: helper.basepath('charts', 'chart-rickshaw.html'),
                resolve: helper.resolveFor('angular-rickshaw')
            })
            .state('app.chart-morris', {
                url: '/chart-morris',
                title: 'Chart Morris',
                templateUrl: helper.basepath('charts', 'chart-morris.html'),
                resolve: helper.resolveFor('morris')
            })
            .state('app.chart-chartist', {
                url: '/chart-chartist',
                title: 'Chart Chartist',
                templateUrl: helper.basepath('charts', 'chart-chartist.html'),
                resolve: helper.resolveFor('angular-chartist')
            });
    }
})();
