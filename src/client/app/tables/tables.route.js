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
                state: 'app.table-standard',
                config: {
                    url: '/table-standard',
                    title: 'Table Standard',
                    templateUrl: routerHelper.basepath('tables', 'table-standard.html')
                }
            },
            {
                state: 'app.table-extended',
                config: {
                    url: '/table-extended',
                    title: 'Table Extended',
                    templateUrl: routerHelper.basepath('tables', 'table-extended.html')
                }
            },
            {
                state: 'app.table-datatable',
                config: {
                    url: '/table-datatable',
                    title: 'Table Datatable',
                    templateUrl: routerHelper.basepath('tables', 'table-datatable.html'),
                    resolve: routerHelper.resolveFor('datatables')
                }
            },
            {
                state: 'app.table-xeditable',
                config: {
                    url: '/table-xeditable',
                    templateUrl: routerHelper.basepath('tables', 'table-xeditable.html'),
                    resolve: routerHelper.resolveFor('xeditable')
                }
            },
            {
                state: 'app.table-ngtable',
                config: {
                    url: '/table-ngtable',
                    templateUrl: routerHelper.basepath('tables', 'table-ngtable.html'),
                    resolve: routerHelper.resolveFor('ngTable', 'ngTableExport')
                }
            },
            {
                state: 'app.table-uigrid',
                config: {
                    url: '/table-uigrid',
                    templateUrl: routerHelper.basepath('tables', 'table-uigrid.html'),
                    resolve: routerHelper.resolveFor('ui.grid')
                }
            },
            {
                state: 'app.table-angulargrid',
                config: {
                    url: '/table-angulargrid',
                    templateUrl: routerHelper.basepath('tables', 'table-angulargrid.html'),
                    resolve: routerHelper.resolveFor('angularGrid')
                }
            }
        ]
    }
})();
