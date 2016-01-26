var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var http_1 = require('angular2/http');
var core_1 = require('angular2/core');
var model_1 = require('./model');
require('rxjs/add/operator/map');
var DataService = (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getData = function () {
        return this.http.get('http://localhost:14373/api/data')
            .map(function (res) { return res.json(); })
            .map(function (people) {
            var result = [];
            if (people) {
                people.forEach(function (person) {
                    result.push(new model_1.Person(person.id, person.firstName, person.lastName, new Date(person.dateOfBirth)));
                });
            }
            return result;
        });
    };
    DataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DataService);
    return DataService;
})();
exports.DataService = DataService;
