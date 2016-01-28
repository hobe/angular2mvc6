var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Selectable_1 = require('./Selectable');
var Person = (function (_super) {
    __extends(Person, _super);
    function Person() {
        _super.call(this);
    }
    return Person;
})(Selectable_1.Selectable);
exports.Person = Person;
