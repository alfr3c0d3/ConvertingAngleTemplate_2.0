(function () {
    'use strict';

    angular
        .module('app.maps')
        .config(routesConfig);

    routesConfig.$inject = ['$stateProvider', 'RouteHelpersProvider'];
    function routesConfig($stateProvider, helper) {

        $stateProvider
            .state('app.maps-google', {
                url: '/maps-google',
                title: 'Maps Google',
                templateUrl: helper.basepath('maps', 'maps-google.html'),
                resolve: helper.resolveFor('loadGoogleMapsJS', function () { return loadGoogleMaps(); }, 'ui.map')
            })
            .state('app.maps-vector', {
                url: '/maps-vector',
                title: 'Maps Vector',
                templateUrl: helper.basepath('maps', 'maps-vector.html'),
                controller: 'VectorMapController',
                controllerAs: 'vmap',
                resolve: helper.resolveFor('vector-map', 'vector-map-maps')
            });
    }
})();
