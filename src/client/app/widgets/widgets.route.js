(function () {
    'use strict';

    angular
        .module('app.tables')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates(routerHelper));
    }

    function getStates(routerHelper) {
        return [
            {
                state: 'app.widgets',
                config: {
                    url: '/widgets',
                    title: 'Widgets',
                    templateUrl: routerHelper.basepath('widgets', 'widgets.html'),
                    resolve: routerHelper.resolveFor('loadGoogleMapsJS', function () { return loadGoogleMaps(); }, 'ui.map')
                }
            }
        ]
    }
})();
