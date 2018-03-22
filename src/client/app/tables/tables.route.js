(function () {
    'use strict';

    angular
        .module('app.tables')
        .config(routesConfig);

    routesConfig.$inject = ['$stateProvider', 'RouteHelpersProvider'];
    function routesConfig($stateProvider, helper) {

        $stateProvider
            .state('app.table-standard', {
                url: '/table-standard',
                title: 'Table Standard',
                templateUrl: helper.basepath('tables', 'table-standard.html')
            })
            .state('app.table-extended', {
                url: '/table-extended',
                title: 'Table Extended',
                templateUrl: helper.basepath('tables', 'table-extended.html')
            })
            .state('app.table-datatable', {
                url: '/table-datatable',
                title: 'Table Datatable',
                templateUrl: helper.basepath('tables', 'table-datatable.html'),
                resolve: helper.resolveFor('datatables')
            })
            .state('app.table-xeditable', {
                url: '/table-xeditable',
                templateUrl: helper.basepath('tables', 'table-xeditable.html'),
                resolve: helper.resolveFor('xeditable')
            })
            .state('app.table-ngtable', {
                url: '/table-ngtable',
                templateUrl: helper.basepath('tables', 'table-ngtable.html'),
                resolve: helper.resolveFor('ngTable', 'ngTableExport')
            })
            .state('app.table-uigrid', {
                url: '/table-uigrid',
                templateUrl: helper.basepath('tables', 'table-uigrid.html'),
                resolve: helper.resolveFor('ui.grid')
            })
            .state('app.table-angulargrid', {
                url: '/table-angulargrid',
                templateUrl: helper.basepath('tables', 'table-angulargrid.html'),
                resolve: helper.resolveFor('angularGrid')
            });
    }
})();
