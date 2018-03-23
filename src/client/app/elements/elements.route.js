(function () {
    'use strict';

    angular
        .module('app.elements')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates(routerHelper));
    }

    function getStates(routerHelper) {
        return [
            {
                state: 'app.buttons',
                config: {
                    url: '/buttons',
                    title: 'Buttons',
                    templateUrl: routerHelper.basepath('elements', 'buttons.html')
                }
            },
            {
                state: 'app.colors',
                config: {
                    url: '/colors',
                    title: 'Colors',
                    templateUrl: routerHelper.basepath('elements', 'colors.html')
                }
            },
            {
                state: 'app.localization',
                config: {
                    url: '/localization',
                    title: 'Localization',
                    templateUrl: routerHelper.basepath('elements', 'localization.html')
                }
            },
            {
                state: 'app.infinite-scroll',
                config: {
                    url: '/infinite-scroll',
                    title: 'Infinite Scroll',
                    templateUrl: routerHelper.basepath('elements', 'infinite-scroll.html'),
                    resolve: routerHelper.resolveFor('infinite-scroll')
                }
            },
            {
                state: 'app.navtree',
                config: {
                    url: '/navtree',
                    title: 'Nav Tree',
                    templateUrl: routerHelper.basepath('elements', 'nav-tree.html'),
                    resolve: routerHelper.resolveFor('angularBootstrapNavTree')
                }
            },
            {
                state: 'app.nestable',
                config: {
                    url: '/nestable',
                    title: 'Nestable',
                    templateUrl: routerHelper.basepath('elements', 'nestable.html'),
                    resolve: routerHelper.resolveFor('ng-nestable')
                }
            },
            {
                state: 'app.sortable',
                config: {
                    url: '/sortable',
                    title: 'Sortable',
                    templateUrl: routerHelper.basepath('elements', 'sortable.html'),
                    resolve: routerHelper.resolveFor('ui.sortable')
                }
            },
            {
                state: 'app.notifications',
                config: {
                    url: '/notifications',
                    title: 'Notifications',
                    templateUrl: routerHelper.basepath('elements', 'notifications.html')
                }
            },
            {
                state: 'app.carousel',
                config: {
                    url: '/carousel',
                    title: 'Carousel',
                    templateUrl: routerHelper.basepath('elements', 'carousel.html'),
                    resolve: routerHelper.resolveFor('angular-carousel')
                }
            },
            {
                state: 'app.ngdialog',
                config: {
                    url: '/ngdialog',
                    title: 'ngDialog',
                    templateUrl: routerHelper.basepath('elements', 'ngdialog.html'),
                    resolve: {
                        tpl: function () { return { path: routerHelper.basepath('elements', 'ngdialog-template.html') }; }
                    },
                    controller: 'DialogIntroCtrl'
                }

            },
            {
                state: 'app.sweetalert',
                config: {
                    url: '/sweetalert',
                    title: 'SweetAlert',
                    templateUrl: routerHelper.basepath('elements', 'sweetalert.html'),
                }
            },
            {
                state: 'app.tour',
                config: {
                    url: '/tour',
                    title: 'Tour',
                    templateUrl: routerHelper.basepath('elements', 'tour.html'),
                    resolve: routerHelper.resolveFor('bm.bsTour')
                }
            },
            {
                state: 'app.interaction',
                config: {
                    url: '/interaction',
                    title: 'Interaction',
                    templateUrl: routerHelper.basepath('elements', 'interaction.html')
                }
            },
            {
                state: 'app.spinners',
                config: {
                    url: '/spinners',
                    title: 'Spinners',
                    templateUrl: routerHelper.basepath('elements', 'spinners.html'),
                    resolve: routerHelper.resolveFor('loaders.css', 'spinkit')
                }
            },
            {
                state: 'app.dropdown-animations',
                config: {
                    url: '/dropdown-animations',
                    title: 'Dropdown Animations',
                    templateUrl: routerHelper.basepath('elements', 'dropdown-animations.html')
                }
            },
            {
                state: 'app.panels',
                config: {
                    url: '/panels',
                    title: 'Panels',
                    templateUrl: routerHelper.basepath('elements', 'panels.html')
                }
            },
            {
                state: 'app.portlets',
                config: {
                    url: '/portlets',
                    title: 'Portlets',
                    templateUrl: routerHelper.basepath('elements', 'portlets.html'),
                    resolve: routerHelper.resolveFor('ui.sortable')
                }
            },
            {
                state: 'app.grid',
                config: {
                    url: '/grid',
                    title: 'Grid',
                    templateUrl: routerHelper.basepath('elements', 'grid.html')
                }
            },
            {
                state: 'app.grid-masonry',
                config: {
                    url: '/grid-masonry',
                    title: 'Grid Masonry',
                    templateUrl: routerHelper.basepath('elements', 'grid-masonry.html')
                }
            },
            {
                state: 'app.grid-masonry-deck',
                config: {
                    url: '/grid-masonry-deck',
                    title: 'Grid Masonry',
                    templateUrl: routerHelper.basepath('elements', 'grid-masonry-deck.html'),
                    resolve: routerHelper.resolveFor('spinkit', 'akoenig.deckgrid')
                }
            },
            {
                state: 'app.typo',
                config: {
                    url: '/typo',
                    title: 'Typo',
                    templateUrl: routerHelper.basepath('elements', 'typo.html')
                }
            },
            {
                state: 'app.icons-font',
                config: {
                    url: '/icons-font',
                    title: 'Icons Font',
                    templateUrl: routerHelper.basepath('elements', 'icons-font.html'),
                    resolve: routerHelper.resolveFor('icons')
                }
            },
            {
                state: 'app.icons-weather',
                config: {
                    url: '/icons-weather',
                    title: 'Icons Weather',
                    templateUrl: routerHelper.basepath('elements', 'icons-weather.html'),
                    resolve: routerHelper.resolveFor('weather-icons', 'skycons')
                }
            }
        ];
    }
    })();
