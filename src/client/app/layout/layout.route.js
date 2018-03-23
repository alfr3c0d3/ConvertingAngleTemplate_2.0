(function () {
    'use strict';

    angular
        .module('app.layout')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates(routerHelper));
    }

    function getStates(routerHelper) {
        return [
            {
                state: 'app',
                config: {
                    url: '/app',
                    abstract: true,
                    templateUrl: routerHelper.basepath('layout', 'app.html'),
                    resolve: routerHelper.resolveFor('fastclick', 'modernizr', 'icons', 'screenfull', 'animo', 'sparklines', 'slimscroll', 'easypiechart', 'toaster', 'whirl')
                }
            },
            //
            // Horizontal layout
            // -----------------------------------
            {
                state: 'app-h',
                config: {
                    url: '/app-h',
                    abstract: true,
                    templateUrl: routerHelper.basepath('layout', 'app-h.html'),
                    resolve: routerHelper.resolveFor('fastclick', 'modernizr', 'icons', 'screenfull', 'animo', 'sparklines', 'slimscroll', 'easypiechart', 'toaster', 'whirl')
                }
            }
        ];
    }
})();
