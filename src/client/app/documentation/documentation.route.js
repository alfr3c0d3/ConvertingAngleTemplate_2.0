(function () {
    'use strict';

    angular
        .module('app.documentation')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates(routerHelper));
    }

    function getStates(routerHelper) {
        return [
            {
                state: 'app.documentation',
                config: {
                    url: '/documentation',
                    title: 'Documentation',
                    templateUrl: routerHelper.basepath('documentation', 'documentation.html'),
                    resolve: routerHelper.resolveFor('flatdoc')
                }
            }
        ];
    }
})();
