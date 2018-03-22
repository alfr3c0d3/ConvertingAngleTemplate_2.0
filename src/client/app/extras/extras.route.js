(function () {
    'use strict';

    angular
        .module('app.extras')
        .config(routesConfig);

    routesConfig.$inject = ['$stateProvider', 'RouteHelpersProvider'];
    function routesConfig($stateProvider, helper) {

        $stateProvider
            .state('app.contacts', {
                url: '/contacts',
                title: 'Contacts',
                templateUrl: helper.basepath('extras', 'contacts.html')
            })
            .state('app.contact-details', {
                url: '/contact-details',
                title: 'Contact Details',
                templateUrl: helper.basepath('extras', 'contact-details.html')
            })
            .state('app.projects', {
                url: '/projects',
                title: 'Projects',
                templateUrl: helper.basepath('extras', 'projects.html')
            })
            .state('app.project-details', {
                url: '/project-details',
                title: 'Project Details',
                templateUrl: helper.basepath('extras', 'project-details.html')
            })
            .state('app.team-viewer', {
                url: '/team-viewer',
                title: 'Team Viewer',
                templateUrl: helper.basepath('extras', 'team-viewer.html')
            })
            .state('app.social-board', {
                url: '/social-board',
                title: 'Social Board',
                templateUrl: helper.basepath('extras', 'social-board.html')
            })
            .state('app.vote-links', {
                url: '/vote-links',
                title: 'Vote Links',
                templateUrl: helper.basepath('extras', 'vote-links.html')
            })
            .state('app.bug-tracker', {
                url: '/bug-tracker',
                title: 'Bug Tracker',
                templateUrl: helper.basepath('extras', 'bug-tracker.html'),
                resolve: helper.resolveFor('datatables')
            })
            .state('app.faq', {
                url: '/faq',
                title: 'FAQ',
                templateUrl: helper.basepath('extras', 'faq.html'),
                resolve: helper.resolveFor('datatables')
            })
            .state('app.help-center', {
                url: '/help-center',
                title: 'Help Center',
                templateUrl: helper.basepath('extras', 'help-center.html')
            })
            .state('app.followers', {
                url: '/followers',
                title: 'Followers',
                templateUrl: helper.basepath('extras', 'followers.html')
            })
            .state('app.settings', {
                url: '/settings',
                title: 'Settings',
                templateUrl: helper.basepath('extras', 'settings.html'),
                resolve: helper.resolveFor('filestyle')
            })
            .state('app.plans', {
                url: '/plans',
                title: 'Plans',
                templateUrl: helper.basepath('extras', 'plans.html')
            })
            .state('app.file-manager', {
                url: '/file-manager',
                title: 'File Manager',
                templateUrl: helper.basepath('extras', 'file-manager.html'),
                resolve: helper.resolveFor('filestyle')
            })
            .state('app.timeline', {
                url: '/timeline',
                title: 'Timeline',
                templateUrl: helper.basepath('extras', 'timeline.html')
            })
            .state('app.calendar', {
                url: '/calendar',
                title: 'Calendar',
                templateUrl: helper.basepath('extras', 'calendar.html'),
                resolve: helper.resolveFor('moment', 'ui.calendar')
            })
            .state('app.invoice', {
                url: '/invoice',
                title: 'Invoice',
                templateUrl: helper.basepath('extras', 'invoice.html')
            })
            .state('app.search', {
                url: '/search',
                title: 'Search',
                templateUrl: helper.basepath('extras', 'search.html'),
                resolve: helper.resolveFor('moment', 'localytics.directives', 'ui.bootstrap-slider')
            })
            .state('app.todo', {
                url: '/todo',
                title: 'Todo List',
                templateUrl: helper.basepath('extras', 'todo.html'),
                controller: 'TodoController',
                controllerAs: 'todo'
            })
            .state('app.profile', {
                url: '/profile',
                title: 'Profile',
                templateUrl: helper.basepath('extras', 'profile.html'),
                resolve: helper.resolveFor('loadGoogleMapsJS', function () { return loadGoogleMaps(); }, 'ui.map')
            })
            .state('app.code-editor', {
                url: '/code-editor',
                templateUrl: helper.basepath('extras', 'code-editor.html'),
                controller: 'CodeEditorController',
                controllerAs: 'coder',
                resolve: {
                    deps: helper.resolveFor('codemirror', 'ui.codemirror', 'codemirror-modes-web', 'angularBootstrapNavTree').deps,
                    filetree: ['LoadTreeService', function (LoadTreeService) {
                        return LoadTreeService.get().$promise.then(function (res) {
                            return res.data;
                        });
                    }]
                }
            })
            // Forum
            // -----------------------------------
            .state('app.forum', {
                url: '/forum',
                title: 'Forum',
                templateUrl: helper.basepath('extras', 'forum.html')
            })
            .state('app.forum-topics', {
                url: '/forum/topics/:catid',
                title: 'Forum Topics',
                templateUrl: helper.basepath('extras', 'forum-topics.html')
            })
            .state('app.forum-discussion', {
                url: '/forum/discussion/:topid',
                title: 'Forum Discussion',
                templateUrl: helper.basepath('extras', 'forum-discussion.html')
            })
            // Blog
            // -----------------------------------
            .state('app.blog', {
                url: '/blog',
                title: 'Blog',
                templateUrl: helper.basepath('extras', 'blog.html'),
                resolve: helper.resolveFor('angular-jqcloud')
            })
            .state('app.blog-post', {
                url: '/post',
                title: 'Post',
                templateUrl: helper.basepath('extras', 'blog-post.html'),
                resolve: helper.resolveFor('angular-jqcloud')
            })
            .state('app.articles', {
                url: '/articles',
                title: 'Articles',
                templateUrl: helper.basepath('extras', 'blog-articles.html'),
                resolve: helper.resolveFor('datatables')
            })
            .state('app.article-view', {
                url: '/article/:id',
                title: 'Article View',
                templateUrl: helper.basepath('extras', 'blog-article-view.html'),
                resolve: helper.resolveFor('ui.select', 'summernote')
            })
            // eCommerce
            // -----------------------------------
            .state('app.orders', {
                url: '/orders',
                title: 'Orders',
                templateUrl: helper.basepath('extras', 'ecommerce-orders.html'),
                resolve: helper.resolveFor('datatables')
            })
            .state('app.order-view', {
                url: '/order-view',
                title: 'Order View',
                templateUrl: helper.basepath('extras', 'ecommerce-order-view.html')
            })
            .state('app.products', {
                url: '/products',
                title: 'Products',
                templateUrl: helper.basepath('extras', 'ecommerce-products.html'),
                resolve: helper.resolveFor('datatables')
            })
            .state('app.product-view', {
                url: '/product/:id',
                title: 'Product View',
                templateUrl: helper.basepath('extras', 'ecommerce-product-view.html')
            })
            .state('app.checkout', {
                url: '/checkout',
                title: 'Checkout',
                templateUrl: helper.basepath('extras', 'ecommerce-checkout.html')
            })
            // Mailbox
            // -----------------------------------
            .state('app.mailbox', {
                url: '/mailbox',
                title: 'Mailbox',
                abstract: true,
                templateUrl: helper.basepath('extras', 'mailbox.html')
            })
            .state('app.mailbox.folder', {
                url: '/folder/:folder',
                title: 'Mailbox',
                templateUrl: helper.basepath('extras', 'mailbox-inbox.html')
            })
            .state('app.mailbox.view', {
                url: '/{mid:[0-9]{1,4}}',
                title: 'View mail',
                templateUrl: helper.basepath('extras', 'mailbox-view.html'),
                resolve: helper.resolveFor('ngWig')
            })
            .state('app.mailbox.compose', {
                url: '/compose',
                title: 'Mailbox',
                templateUrl: helper.basepath('extras', 'mailbox-compose.html'),
                resolve: helper.resolveFor('ngWig')
            });
    }
})();
