var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ScalarObservable_1 = require('../observable/ScalarObservable');
var fromArray_1 = require('../observable/fromArray');
var throw_1 = require('../observable/throw');
var Subscriber_1 = require('../Subscriber');
var tryCatch_1 = require('../util/tryCatch');
var errorObject_1 = require('../util/errorObject');
/**
 * Returns an Observable that emits whether or not every item of the source satisfies the condition specified.
 * @param {function} predicate a function for determining if an item meets a specified condition.
 * @param {any} [thisArg] optional object to use for `this` in the callback
 * @returns {Observable} an Observable of booleans that determines if all items of the source Observable meet the condition specified.
 */
function every(predicate, thisArg) {
    var source = this;
    if (source._isScalar) {
        var result = tryCatch_1.tryCatch(predicate).call(thisArg || this, source.value, 0, source);
        if (result === errorObject_1.errorObject) {
            return new throw_1.ErrorObservable(errorObject_1.errorObject.e, source.scheduler);
        }
        else {
            return new ScalarObservable_1.ScalarObservable(result, source.scheduler);
        }
    }
    if (source instanceof fromArray_1.ArrayObservable) {
        var array = source.array;
        var result = tryCatch_1.tryCatch(function (array, predicate, thisArg) {
            return array.every(predicate, thisArg);
        })(array, predicate, thisArg);
        if (result === errorObject_1.errorObject) {
            return new throw_1.ErrorObservable(errorObject_1.errorObject.e, source.scheduler);
        }
        else {
            return new ScalarObservable_1.ScalarObservable(result, source.scheduler);
        }
    }
    return source.lift(new EveryOperator(predicate, thisArg, source));
}
exports.every = every;
var EveryOperator = (function () {
    function EveryOperator(predicate, thisArg, source) {
        this.predicate = predicate;
        this.thisArg = thisArg;
        this.source = source;
    }
    EveryOperator.prototype.call = function (observer) {
        return new EverySubscriber(observer, this.predicate, this.thisArg, this.source);
    };
    return EveryOperator;
})();
var EverySubscriber = (function (_super) {
    __extends(EverySubscriber, _super);
    function EverySubscriber(destination, predicate, thisArg, source) {
        _super.call(this, destination);
        this.predicate = predicate;
        this.thisArg = thisArg;
        this.source = source;
        this.index = 0;
    }
    EverySubscriber.prototype.notifyComplete = function (everyValueMatch) {
        this.destination.next(everyValueMatch);
        this.destination.complete();
    };
    EverySubscriber.prototype._next = function (value) {
        var result = tryCatch_1.tryCatch(this.predicate).call(this.thisArg || this, value, this.index++, this.source);
        if (result === errorObject_1.errorObject) {
            this.destination.error(result.e);
        }
        else if (!result) {
            this.notifyComplete(false);
        }
    };
    EverySubscriber.prototype._complete = function () {
        this.notifyComplete(true);
    };
    return EverySubscriber;
})(Subscriber_1.Subscriber);
//# sourceMappingURL=every.js.map