(function () {
    'use strict';

    angular
        .module('app.extras')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates(routerHelper));
    }

    function getStates(routerHelper) {
        return [
            {
                state: 'app.contacts',
                config: {
                    url: '/contacts',
                    title: 'Contacts',
                    templateUrl: routerHelper.basepath('extras', 'contacts.html')
                }
            },
            {
                state: 'app.contact-details',
                config: {
                    url: '/contact-details',
                    title: 'Contact Details',
                    templateUrl: routerHelper.basepath('extras', 'contact-details.html')
                }
            },
            {
                state: 'app.projects',
                config: {
                    url: '/projects',
                    title: 'Projects',
                    templateUrl: routerHelper.basepath('extras', 'projects.html')
                }
            },
            {
                state: 'app.project-details',
                config: {
                    url: '/project-details',
                    title: 'Project Details',
                    templateUrl: routerHelper.basepath('extras', 'project-details.html')
                }
            },
            {
                state: 'app.team-viewer',
                config: {
                    url: '/team-viewer',
                    title: 'Team Viewer',
                    templateUrl: routerHelper.basepath('extras', 'team-viewer.html')
                }
            },
            {
                state: 'app.social-board',
                config: {
                    url: '/social-board',
                    title: 'Social Board',
                    templateUrl: routerHelper.basepath('extras', 'social-board.html')
                }
            },
            {
                state: 'app.vote-links',
                config: {
                    url: '/vote-links',
                    title: 'Vote Links',
                    templateUrl: routerHelper.basepath('extras', 'vote-links.html')
                }
            },
            {
                state: 'app.bug-tracker',
                config: {
                    url: '/bug-tracker',
                    title: 'Bug Tracker',
                    templateUrl: routerHelper.basepath('extras', 'bug-tracker.html'),
                    resolve: routerHelper.resolveFor('datatables')
                }
            },
            {
                state: 'app.faq',
                config: {
                    url: '/faq',
                    title: 'FAQ',
                    templateUrl: routerHelper.basepath('extras', 'faq.html'),
                    resolve: routerHelper.resolveFor('datatables')
                }
            },
            {
                state: 'app.help-center',
                config: {
                    url: '/help-center',
                    title: 'Help Center',
                    templateUrl: routerHelper.basepath('extras', 'help-center.html')
                }
            },
            {
                state: 'app.followers',
                config: {
                    url: '/followers',
                    title: 'Followers',
                    templateUrl: routerHelper.basepath('extras', 'followers.html')
                }
            },
            {
                state: 'app.settings',
                config: {
                    url: '/settings',
                    title: 'Settings',
                    templateUrl: routerHelper.basepath('extras', 'settings.html'),
                    resolve: routerHelper.resolveFor('filestyle')
                }
            },
            {
                state: 'app.plans',
                config: {
                    url: '/plans',
                    title: 'Plans',
                    templateUrl: routerHelper.basepath('extras', 'plans.html')
                }
            },
            {
                state: 'app.file-manager',
                config: {
                    url: '/file-manager',
                    title: 'File Manager',
                    templateUrl: routerHelper.basepath('extras', 'file-manager.html'),
                    resolve: routerHelper.resolveFor('filestyle')
                }
            },
            {
                state: 'app.timeline',
                config: {
                    url: '/timeline',
                    title: 'Timeline',
                    templateUrl: routerHelper.basepath('extras', 'timeline.html')
                }
            },
            {
                state: 'app.calendar',
                config: {
                    url: '/calendar',
                    title: 'Calendar',
                    templateUrl: routerHelper.basepath('extras', 'calendar.html'),
                    resolve: routerHelper.resolveFor('moment', 'ui.calendar')
                }
            },
            {
                state: 'app.invoice',
                config: {
                    url: '/invoice',
                    title: 'Invoice',
                    templateUrl: routerHelper.basepath('extras', 'invoice.html')
                }
            },
            {
                state: 'app.search',
                config: {
                    url: '/search',
                    title: 'Search',
                    templateUrl: routerHelper.basepath('extras', 'search.html'),
                    resolve: routerHelper.resolveFor('moment', 'localytics.directives', 'ui.bootstrap-slider')
                }
            },
            {
                state: 'app.todo',
                config: {
                    url: '/todo',
                    title: 'Todo List',
                    templateUrl: routerHelper.basepath('extras', 'todo.html'),
                    controller: 'TodoController',
                    controllerAs: 'todo'
                }
            },
            {
                state: 'app.profile',
                config: {
                    url: '/profile',
                    title: 'Profile',
                    templateUrl: routerHelper.basepath('extras', 'profile.html'),
                    resolve: routerHelper.resolveFor('loadGoogleMapsJS', function () { return loadGoogleMaps(); }, 'ui.map')
                }
            },
            {
                state: 'app.code-editor',
                config: {
                    url: '/code-editor',
                    templateUrl: routerHelper.basepath('extras', 'code-editor.html'),
                    controller: 'CodeEditorController',
                    controllerAs: 'coder',
                    resolve: {
                        deps: routerHelper.resolveFor('codemirror', 'ui.codemirror', 'codemirror-modes-web', 'angularBootstrapNavTree').deps,
                        filetree: ['LoadTreeService', function (LoadTreeService) {
                            return LoadTreeService.get().$promise.then(function (res) {
                                return res.data;
                            });
                        }]
                    }
                }
                // Forum
                // -----------------------------------
            },
            {
                state: 'app.forum',
                config: {
                    url: '/forum',
                    title: 'Forum',
                    templateUrl: routerHelper.basepath('extras', 'forum.html')
                }
            },
            {
                state: 'app.forum-topics',
                config: {
                    url: '/forum/topics/:catid',
                    title: 'Forum Topics',
                    templateUrl: routerHelper.basepath('extras', 'forum-topics.html')
                }
            },
            {
                state: 'app.forum-discussion',
                config: {
                    url: '/forum/discussion/:topid',
                    title: 'Forum Discussion',
                    templateUrl: routerHelper.basepath('extras', 'forum-discussion.html')
                }
                // Blog
                // -----------------------------------
            },
            {
                state: 'app.blog',
                config: {
                    url: '/blog',
                    title: 'Blog',
                    templateUrl: routerHelper.basepath('extras', 'blog.html'),
                    resolve: routerHelper.resolveFor('angular-jqcloud')
                }
            },
            {
                state: 'app.blog-post',
                config: {
                    url: '/post',
                    title: 'Post',
                    templateUrl: routerHelper.basepath('extras', 'blog-post.html'),
                    resolve: routerHelper.resolveFor('angular-jqcloud')
                }
            },
            {
                state: 'app.articles',
                config: {
                    url: '/articles',
                    title: 'Articles',
                    templateUrl: routerHelper.basepath('extras', 'blog-articles.html'),
                    resolve: routerHelper.resolveFor('datatables')
                }
            },
            {
                state: 'app.article-view',
                config: {
                    url: '/article/:id',
                    title: 'Article View',
                    templateUrl: routerHelper.basepath('extras', 'blog-article-view.html'),
                    resolve: routerHelper.resolveFor('ui.select', 'summernote')
                }
                // eCommerce
                // -----------------------------------
            },
            {
                state: 'app.orders',
                config: {
                    url: '/orders',
                    title: 'Orders',
                    templateUrl: routerHelper.basepath('extras', 'ecommerce-orders.html'),
                    resolve: routerHelper.resolveFor('datatables')
                }
            },
            {
                state: 'app.order-view',
                config: {
                    url: '/order-view',
                    title: 'Order View',
                    templateUrl: routerHelper.basepath('extras', 'ecommerce-order-view.html')
                }
            },
            {
                state: 'app.products',
                config: {
                    url: '/products',
                    title: 'Products',
                    templateUrl: routerHelper.basepath('extras', 'ecommerce-products.html'),
                    resolve: routerHelper.resolveFor('datatables')
                }
            },
            {
                state: 'app.product-view',
                config: {
                    url: '/product/:id',
                    title: 'Product View',
                    templateUrl: routerHelper.basepath('extras', 'ecommerce-product-view.html')
                }
            },
            {
                state: 'app.checkout',
                config: {
                    url: '/checkout',
                    title: 'Checkout',
                    templateUrl: routerHelper.basepath('extras', 'ecommerce-checkout.html')
                }
                // Mailbox
                // -----------------------------------
            },
            {
                state: 'app.mailbox',
                config: {
                    url: '/mailbox',
                    title: 'Mailbox',
                    abstract: true,
                    templateUrl: routerHelper.basepath('extras', 'mailbox.html')
                }
            },
            {
                state: 'app.mailbox.folder',
                config: {
                    url: '/folder/:folder',
                    title: 'Mailbox',
                    templateUrl: routerHelper.basepath('extras', 'mailbox-inbox.html')
                }
            },
            {
                state: 'app.mailbox.view',
                config: {
                    url: '/{mid:[0-9]{1,4}}',
                    title: 'View mail',
                    templateUrl: routerHelper.basepath('extras', 'mailbox-view.html'),
                    resolve: routerHelper.resolveFor('ngWig')
                }
            },
            {
                state: 'app.mailbox.compose',
                config: {
                    url: '/compose',
                    title: 'Mailbox',
                    templateUrl: routerHelper.basepath('extras', 'mailbox-compose.html'),
                    resolve: routerHelper.resolveFor('ngWig')
                }
            }
        ]
    }
})();
