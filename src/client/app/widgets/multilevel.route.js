(function () {
    'use strict';

    angular
        .module('app.widgets')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates(routerHelper));
    }

    function getStates(routerHelper) {
        return [
            {
                state: 'app.multilevel',
                config: {
                    url: '/multilevel',
                    title: 'Multilevel',
                    template: '<h3>Multilevel Views</h3>' + '<div class="lead ba p">View @ Top Level ' + '<div ui-view=""></div> </div>'
                }

            },
            {
                state: 'app.multilevel.level1',
                config: {
                    url: '/level1',
                    title: 'Multilevel - Level1',
                    template: '<div class="lead ba p">View @ Level 1' + '<div ui-view=""></div> </div>'
                }

            },
            {
                state: 'app.multilevel.level1.item',
                config: {
                    url: '/item',
                    title: 'Multilevel - Level1',
                    template: '<div class="lead ba p"> Menu item @ Level 1</div>'
                }

            },
            {
                state: 'app.multilevel.level1.level2',
                config: {
                    url: '/level2',
                    title: 'Multilevel - Level2',
                    template: '<div class="lead ba p">View @ Level 2' + '<div ui-view=""></div> </div>'
                }

            },
            {
                state: 'app.multilevel.level1.level2.level3',
                config: {
                    url: '/level3',
                    title: 'Multilevel - Level3',
                    template: '<div class="lead ba p">View @ Level 3' + '<div ui-view=""></div> </div>'
                }

            },
            {
                state: 'app.multilevel.level1.level2.level3.item',
                config: {
                    url: '/item',
                    title: 'Multilevel - Level3 Item',
                    template: '<div class="lead ba p"> Menu item @ Level 3</div>'
                }
            }
        ];
    }
})();
