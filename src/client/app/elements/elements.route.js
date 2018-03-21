(function () {
    'use strict';

    angular
        .module('app.elements')
        .config(routesConfig);

        routesConfig.$inject = ['$stateProvider', 'RouteHelpersProvider'];
        function routesConfig($stateProvider, helper){

        $stateProvider.state('app.buttons', {
            url: '/buttons',
            title: 'Buttons',
            templateUrl: helper.basepath('elements', 'buttons.html')
        })
        .state('app.colors', {
            url: '/colors',
            title: 'Colors',
            templateUrl: helper.basepath('elements', 'colors.html')
        })
        .state('app.localization', {
            url: '/localization',
            title: 'Localization',
            templateUrl: helper.basepath('elements', 'localization.html')
        })
        .state('app.infinite-scroll', {
            url: '/infinite-scroll',
            title: 'Infinite Scroll',
            templateUrl: helper.basepath('elements', 'infinite-scroll.html'),
            resolve: helper.resolveFor('infinite-scroll')
        })
        .state('app.navtree', {
            url: '/navtree',
            title: 'Nav Tree',
            templateUrl: helper.basepath('elements', 'nav-tree.html'),
            resolve: helper.resolveFor('angularBootstrapNavTree')
        })
        .state('app.nestable', {
            url: '/nestable',
            title: 'Nestable',
            templateUrl: helper.basepath('elements', 'nestable.html'),
            resolve: helper.resolveFor('ng-nestable')
        })
        .state('app.sortable', {
            url: '/sortable',
            title: 'Sortable',
            templateUrl: helper.basepath('elements', 'sortable.html'),
            resolve: helper.resolveFor('ui.sortable')
        })
        .state('app.notifications', {
            url: '/notifications',
            title: 'Notifications',
            templateUrl: helper.basepath('elements', 'notifications.html')
        })
        .state('app.carousel', {
            url: '/carousel',
            title: 'Carousel',
            templateUrl: helper.basepath('elements', 'carousel.html'),
            resolve: helper.resolveFor('angular-carousel')
        })
        .state('app.ngdialog', {
            url: '/ngdialog',
            title: 'ngDialog',
            templateUrl: helper.basepath('elements', 'ngdialog.html'),
            resolve: angular.extend(helper.resolveFor('ngDialog'),{
              tpl: function() { return { path: helper.basepath('elements', 'ngdialog-template.html') }; }
            }),
            controller: 'DialogIntroCtrl'
        })
        .state('app.sweetalert', {
          url: '/sweetalert',
          title: 'SweetAlert',
          templateUrl: helper.basepath('elements', 'sweetalert.html'),
          resolve: helper.resolveFor('oitozero.ngSweetAlert')
        })
        .state('app.tour', {
          url: '/tour',
          title: 'Tour',
          templateUrl: helper.basepath('elements', 'tour.html'),
          resolve: helper.resolveFor('bm.bsTour')
        })
        .state('app.interaction', {
            url: '/interaction',
            title: 'Interaction',
            templateUrl: helper.basepath('elements', 'interaction.html')
        })
        .state('app.spinners', {
            url: '/spinners',
            title: 'Spinners',
            templateUrl: helper.basepath('elements', 'spinners.html'),
            resolve: helper.resolveFor('loaders.css', 'spinkit')
        })
        .state('app.dropdown-animations', {
            url: '/dropdown-animations',
            title: 'Dropdown Animations',
            templateUrl: helper.basepath('elements', 'dropdown-animations.html')
        })
        .state('app.panels', {
            url: '/panels',
            title: 'Panels',
            templateUrl: helper.basepath('elements', 'panels.html')
        })
        .state('app.portlets', {
            url: '/portlets',
            title: 'Portlets',
            templateUrl: helper.basepath('elements', 'portlets.html'),
            resolve: helper.resolveFor('ui.sortable')
        })
        .state('app.grid', {
            url: '/grid',
            title: 'Grid',
            templateUrl: helper.basepath('elements', 'grid.html')
        })
        .state('app.grid-masonry', {
            url: '/grid-masonry',
            title: 'Grid Masonry',
            templateUrl: helper.basepath('elements', 'grid-masonry.html')
        })
        .state('app.grid-masonry-deck', {
            url: '/grid-masonry-deck',
            title: 'Grid Masonry',
            templateUrl: helper.basepath('elements', 'grid-masonry-deck.html'),
            resolve: helper.resolveFor('spinkit', 'akoenig.deckgrid')
        })
        .state('app.typo', {
            url: '/typo',
            title: 'Typo',
            templateUrl: helper.basepath('elements', 'typo.html')
        })
        .state('app.icons-font', {
            url: '/icons-font',
            title: 'Icons Font',
            templateUrl: helper.basepath('elements', 'icons-font.html'),
            resolve: helper.resolveFor('icons')
        })
        .state('app.icons-weather', {
            url: '/icons-weather',
            title: 'Icons Weather',
            templateUrl: helper.basepath('elements', 'icons-weather.html'),
            resolve: helper.resolveFor('weather-icons', 'skycons')
        });

        }
})();