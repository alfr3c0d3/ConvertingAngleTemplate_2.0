(function () {
    'use strict';

    angular
        .module('app.documentation')
        .config(routesConfig);

    routesConfig.$inject = ['$stateProvider', 'RouteHelpersProvider'];
    function routesConfig($stateProvider, helper) {

        $stateProvider
            .state('app.documentation', {
                url: '/documentation',
                title: 'Documentation',
                templateUrl: helper.basepath('documentation', 'documentation.html'),
                resolve: helper.resolveFor('flatdoc')
            });
    }
})();
