(function () {
    'use strict';

    angular
        .module('app.forms')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates(routerHelper));
    }

    function getStates(routerHelper) {
        return [
            {
                state: 'app.form-standard',
                config: {
                    url: '/form-standard',
                    title: 'Form Standard',
                    templateUrl: routerHelper.basepath('forms', 'form-standard.html')
                }
            },
            {
                state: 'app.form-extended',
                config: {
                    url: '/form-extended',
                    title: 'Form Extended',
                    templateUrl: routerHelper.basepath('forms', 'form-extended.html'),
                    resolve: routerHelper.resolveFor('colorpicker.module', 'codemirror', 'moment', 'taginput', 'inputmask', 'localytics.directives', 'ui.bootstrap-slider', 'ngWig', 'filestyle', 'summernote')
                }
            },
            {
                state: 'app.form-validation',
                config: {
                    url: '/form-validation',
                    title: 'Form Validation',
                    templateUrl: routerHelper.basepath('forms', 'form-validation.html'),
                    resolve: routerHelper.resolveFor('ui.select', 'taginput', 'inputmask', 'localytics.directives')
                }
            },
            {
                state: 'app.form-wizard',
                config: {
                    url: '/form-wizard',
                    title: 'Form Wizard',
                    templateUrl: routerHelper.basepath('forms', 'form-wizard.html')
                }
            },
            {
                state: 'app.form-upload',
                config: {
                    url: '/form-upload',
                    title: 'Form upload',
                    templateUrl: routerHelper.basepath('forms', 'form-upload.html'),
                    resolve: routerHelper.resolveFor('angularFileUpload', 'filestyle')
                }
            },
            {
                state: 'app.form-xeditable',
                config: {
                    url: '/form-xeditable',
                    templateUrl: routerHelper.basepath('forms', 'form-xeditable.html'),
                    resolve: routerHelper.resolveFor('xeditable')
                }
            },
            {
                state: 'app.form-imagecrop',
                config: {
                    url: '/form-imagecrop',
                    templateUrl: routerHelper.basepath('forms', 'form-imagecrop.html'),
                    resolve: routerHelper.resolveFor('ngImgCrop', 'filestyle')
                }
            },
            {
                state: 'app.form-uiselect',
                config: {
                    url: '/form-uiselect',
                    templateUrl: routerHelper.basepath('forms', 'form-uiselect.html'),
                    controller: 'uiSelectController',
                    controllerAs: 'uisel',
                    resolve: routerHelper.resolveFor('ui.select')
                }
            }
        ];
    }
})();
