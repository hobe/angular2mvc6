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
var model_1 = require('./model');
require('rxjs/add/operator/map');
var AppComponent = (function () {
    function AppComponent(http) {
        this.http = http;
        this.shipments = [];
        //this.getData();
    }
    AppComponent.prototype.getData = function () {
        var _this = this;
        this.http.get('http://localhost:2949/api/data')
            .map(function (res) { return res.json(); })
            .map(function (shipments) {
            var result = [];
            if (shipments) {
                shipments.forEach(function (shipment) {
                    result.push(new model_1.Shipment(shipment.id, shipment.origin, shipment.destination, new Date(shipment.shippedDate)));
                });
            }
            return result;
        }).
            subscribe(function (data) {
            _this.shipments = data;
            console.log(_this.shipments);
        }, function (err) { return console.log(err); });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app"
        }),
        core_1.View({
            templateUrl: 'app/partials/app.html'
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AppComponent);
    return AppComponent;
})();
browser_1.bootstrap(AppComponent, [http_1.HTTP_PROVIDERS]);
