(function () {
    'use strict';

    angular
        .module('app.tables')
        .config(routesConfig);

    routesConfig.$inject = ['$stateProvider', 'RouteHelpersProvider'];
    function routesConfig($stateProvider, helper) {

        $stateProvider
            .state('app.widgets', {
                url: '/widgets',
                title: 'Widgets',
                templateUrl: helper.basepath('widgets', 'widgets.html'),
                resolve: helper.resolveFor('loadGoogleMapsJS', function () { return loadGoogleMaps(); }, 'ui.map')
            });
    }
})();
