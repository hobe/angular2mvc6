var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var people_1 = require('./people/people');
var demo2_1 = require('./demo2/demo2');
require('rxjs/add/operator/map');
var AppComponent = (function () {
    function AppComponent(router, location) {
        this.router = router;
        this.location = location;
    }
    AppComponent.prototype.getLinkStyle = function (path) {
        return this.location.path() === path;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "demo-app",
            directives: [router_1.ROUTER_DIRECTIVES],
            templateUrl: 'app/app.html'
        }),
        router_1.RouteConfig([
            new router_1.Route({ path: '/', component: people_1.PeopleComponent, name: 'Home' }),
            new router_1.Route({ path: '/demo2', component: demo2_1.Demo2Component, name: 'Demo2' })
        ]), 
        __metadata('design:paramtypes', [router_1.Router, router_1.Location])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
