(function () {
    'use strict';

    angular
        .module('app.forms')
        .config(routesConfig);

    routesConfig.$inject = ['$stateProvider', 'RouteHelpersProvider'];
    function routesConfig($stateProvider, helper) {

        $stateProvider
            .state('app.form-standard', {
                url: '/form-standard',
                title: 'Form Standard',
                templateUrl: helper.basepath('forms', 'form-standard.html')
            })
            .state('app.form-extended', {
                url: '/form-extended',
                title: 'Form Extended',
                templateUrl: helper.basepath('forms', 'form-extended.html'),
                resolve: helper.resolveFor('colorpicker.module', 'codemirror', 'moment', 'taginput', 'inputmask', 'localytics.directives', 'ui.bootstrap-slider', 'ngWig', 'filestyle', 'summernote')
            })
            .state('app.form-validation', {
                url: '/form-validation',
                title: 'Form Validation',
                templateUrl: helper.basepath('forms', 'form-validation.html'),
                resolve: helper.resolveFor('ui.select', 'taginput', 'inputmask', 'localytics.directives')
            })
            .state('app.form-wizard', {
                url: '/form-wizard',
                title: 'Form Wizard',
                templateUrl: helper.basepath('forms', 'form-wizard.html')
            })
            .state('app.form-upload', {
                url: '/form-upload',
                title: 'Form upload',
                templateUrl: helper.basepath('forms', 'form-upload.html'),
                resolve: helper.resolveFor('angularFileUpload', 'filestyle')
            })
            .state('app.form-xeditable', {
                url: '/form-xeditable',
                templateUrl: helper.basepath('forms', 'form-xeditable.html'),
                resolve: helper.resolveFor('xeditable')
            })
            .state('app.form-imagecrop', {
                url: '/form-imagecrop',
                templateUrl: helper.basepath('forms', 'form-imagecrop.html'),
                resolve: helper.resolveFor('ngImgCrop', 'filestyle')
            })
            .state('app.form-uiselect', {
                url: '/form-uiselect',
                templateUrl: helper.basepath('forms', 'form-uiselect.html'),
                controller: 'uiSelectController',
                controllerAs: 'uisel',
                resolve: helper.resolveFor('ui.select')
            });
    }
})();
