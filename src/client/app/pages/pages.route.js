(function () {
    'use strict';

    angular
        .module('app.pages')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates(routerHelper));
    }

    function getStates(routerHelper) {
        return [
            {
                state: 'page',
                config: {
                    url: '/page',
                    templateUrl: routerHelper.basepath('pages', 'page.html'),
                    resolve: routerHelper.resolveFor('modernizr', 'icons'),
                    controller: ['$rootScope', function ($rootScope) {
                        $rootScope.app.layout.isBoxed = false;
                    }]
                }
            },
            {
                state: 'page.login',
                config: {
                    url: '/login',
                    title: 'Login',
                    templateUrl: routerHelper.basepath('pages', 'login.html')
                }
            },
            {
                state: 'page.register',
                config: {
                    url: '/register',
                    title: 'Register',
                    templateUrl: routerHelper.basepath('pages', 'register.html')
                }
            },
            {
                state: 'page.recover',
                config: {
                    url: '/recover',
                    title: 'Recover',
                    templateUrl: routerHelper.basepath('pages', 'recover.html')
                }
            },
            {
                state: 'page.lock',
                config: {
                    url: '/lock',
                    title: 'Lock',
                    templateUrl: routerHelper.basepath('pages', 'lock.html')
                }
            },
            {
                state: 'app.template',
                config: {
                    url: '/template',
                    title: 'Blank Template',
                    templateUrl: routerHelper.basepath('pages', 'template.html')
                }
            },
            {
                state: 'page.404',
                config: {
                    url: '/404',
                    title: 'Not Found',
                    templateUrl: routerHelper.basepath('pages', '404.html')
                }
            },
            {
                state: 'page.500',
                config: {
                    url: '/500',
                    title: 'Server error',
                    templateUrl: routerHelper.basepath('pages', '500.html')
                }
            },
            {
                state: 'page.maintenance',
                config: {
                    url: '/maintenance',
                    title: 'Maintenance',
                    templateUrl: routerHelper.basepath('pages', 'maintenance.html')
                }
            }
        ];
    }
})();
