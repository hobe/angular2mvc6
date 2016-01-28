var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var browser_1 = require('angular2/platform/browser');
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
var Person_1 = require('./model/Person');
var dataService_1 = require('./dataService');
require('rxjs/add/operator/map');
var AppComponent = (function () {
    function AppComponent(dataSvc) {
        this.dataSvc = dataSvc;
        this.selectedPerson = new Person_1.Person();
        this.getData();
    }
    AppComponent.prototype.selectAll = function () {
        this.people.forEach(function (p) { return p.IsSelected = true; });
    };
    AppComponent.prototype.getData = function () {
        var _this = this;
        this.isLoading = true;
        this.dataSvc.getData()
            .subscribe(function (people) {
            _this.people = people;
            console.log(_this.people.length);
        }, function (err) { return console.log(err); }, function () { return _this.isLoading = false; });
    };
    AppComponent.prototype.showDetails = function (person) {
        this.selectedPerson = person;
    };
    AppComponent.prototype.removeItems = function () {
        var newList = [];
        this.people.forEach(function (p) {
            if (!p.IsSelected) {
                newList.push(p);
            }
        });
        this.people = newList;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app"
        }),
        core_1.View({
            templateUrl: 'app/partials/app.html'
        }), 
        __metadata('design:paramtypes', [dataService_1.DataService])
    ], AppComponent);
    return AppComponent;
})();
browser_1.bootstrap(AppComponent, [http_1.HTTP_PROVIDERS, dataService_1.DataService]);
