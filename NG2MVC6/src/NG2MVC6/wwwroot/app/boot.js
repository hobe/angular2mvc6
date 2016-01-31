var browser_1 = require('angular2/platform/browser');
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
var router_1 = require('angular2/router');
var app_1 = require('./app');
var dataService_1 = require('./dataService');
browser_1.bootstrap(app_1.AppComponent, [
    http_1.HTTP_PROVIDERS,
    router_1.ROUTER_PROVIDERS,
    core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy }),
    dataService_1.DataService
]);
