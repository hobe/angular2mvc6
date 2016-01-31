import { Component, View } from 'angular2/core';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {ROUTER_DIRECTIVES, RouteConfig, Router, Location, Route} from 'angular2/router';
import { PeopleComponent } from './people/people';
import { Demo2Component } from './demo2/demo2';
import 'rxjs/add/operator/map';

@Component({
    selector: "demo-app",
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'app/app.html'
})
@RouteConfig([
        new Route({ path: '/', component: PeopleComponent, name: 'Home' }),
        new Route({ path: '/demo2', component: Demo2Component, name: 'Demo2' })
])
export class AppComponent {

    router: Router;
    location: Location;

    constructor(router: Router, location: Location) {
        this.router = router;
        this.location = location;
    }

    getLinkStyle(path) {
        return this.location.path() === path;
    }
  
}