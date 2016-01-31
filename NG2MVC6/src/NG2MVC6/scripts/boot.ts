import { bootstrap } from 'angular2/platform/browser';
import { provide } from 'angular2/core';
import { Http, HTTP_PROVIDERS, Response } from 'angular2/http';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {ROUTER_DIRECTIVES, RouteConfig, Router, Location, Route} from 'angular2/router';
import { AppComponent } from './app';
import { DataService } from './dataService';

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy }),
    DataService
    ]);