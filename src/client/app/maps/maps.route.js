(function () {
    'use strict';

    angular
        .module('app.maps')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates(routerHelper));
    }

    function getStates(routerHelper) {
        return [
            {
                state: 'app.maps-google',
                config: {
                    url: '/maps-google',
                    title: 'Maps Google',
                    templateUrl: routerHelper.basepath('maps', 'maps-google.html'),
                    resolve: routerHelper.resolveFor('loadGoogleMapsJS', function () { return loadGoogleMaps(); }, 'ui.map')
                }
            },
            {
                state: 'app.maps-vector',
                config: {
                    url: '/maps-vector',
                    title: 'Maps Vector',
                    templateUrl: routerHelper.basepath('maps', 'maps-vector.html'),
                    controller: 'VectorMapController',
                    controllerAs: 'vmap',
                    resolve: routerHelper.resolveFor('vector-map', 'vector-map-maps')
                }
            }
        ]
    }
})();
