(function () {
    'use strict';

    angular
        .module('app.pages')
        .config(routesConfig);

    routesConfig.$inject = ['$stateProvider', 'RouteHelpersProvider'];
    function routesConfig($stateProvider, helper) {

        //
        // Single Page Routes
        // -----------------------------------
        $stateProvider
            .state('page', {
                url: '/page',
                templateUrl: helper.basepath('pages', 'page.html'),
                resolve: helper.resolveFor('modernizr', 'icons'),
                controller: ['$rootScope', function ($rootScope) {
                    $rootScope.app.layout.isBoxed = false;
                }]
            })
            .state('page.login', {
                url: '/login',
                title: 'Login',
                templateUrl: helper.basepath('pages', 'login.html')
            })
            .state('page.register', {
                url: '/register',
                title: 'Register',
                templateUrl: helper.basepath('pages', 'register.html')
            })
            .state('page.recover', {
                url: '/recover',
                title: 'Recover',
                templateUrl: helper.basepath('pages', 'recover.html')
            })
            .state('page.lock', {
                url: '/lock',
                title: 'Lock',
                templateUrl: helper.basepath('pages', 'lock.html')
            })
            .state('app.template', {
                url: '/template',
                title: 'Blank Template',
                templateUrl: helper.basepath('pages', 'template.html')
            })
            .state('page.404', {
                url: '/404',
                title: 'Not Found',
                templateUrl: helper.basepath('pages', '404.html')
            })
            .state('page.500', {
                url: '/500',
                title: 'Server error',
                templateUrl: helper.basepath('pages', '500.html')
            })
            .state('page.maintenance', {
                url: '/maintenance',
                title: 'Maintenance',
                templateUrl: helper.basepath('pages', 'maintenance.html')
            });
    }
})();
