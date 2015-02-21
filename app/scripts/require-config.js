/// <reference path="../lib/js_lib/jquery-2.1.3.js" />
var SCRIPTS_MODULE = '/app/scripts/module/';
var require = {
    baseUrl: "../lib/js_lib",
    paths: {
        jquery: 'jquery-2.1.3',
        knockout: 'knockout-3.2.0',
        pager: 'pager',
        sammy: 'sammy',
        ko_app: '/app/scripts/ko-app',
        text: 'text',

        /**** Router Path  ****/
        'test/viewmodel': SCRIPTS_MODULE + 'test-view-model',
        // Dashboard
        // path: '/'
        'dashboard': SCRIPTS_MODULE + 'dashboard/shell-view-model',

        // game
        // path: '/game'
        'game': SCRIPTS_MODULE + 'game/shell-view-model',
    }
};
