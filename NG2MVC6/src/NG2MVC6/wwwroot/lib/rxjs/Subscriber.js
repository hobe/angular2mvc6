var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var noop_1 = require('./util/noop');
var throwError_1 = require('./util/throwError');
var tryOrThrowError_1 = require('./util/tryOrThrowError');
var Subscription_1 = require('./Subscription');
var rxSubscriber_1 = require('./symbol/rxSubscriber');
var Observer_1 = require('./Observer');
var Subscriber = (function (_super) {
    __extends(Subscriber, _super);
    function Subscriber(destination) {
        if (destination === void 0) { destination = Observer_1.empty; }
        _super.call(this);
        this.isStopped = false;
        this.destination = destination;
        if (!destination ||
            (destination instanceof Subscriber) ||
            (destination === Observer_1.empty)) {
            return;
        }
        if (typeof destination.next !== 'function') {
            destination.next = noop_1.noop;
        }
        if (typeof destination.error !== 'function') {
            destination.error = throwError_1.throwError;
        }
        if (typeof destination.complete !== 'function') {
            destination.complete = noop_1.noop;
        }
    }
    Subscriber.create = function (next, error, complete) {
        return new SafeSubscriber(next, error, complete);
    };
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.isUnsubscribed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    Subscriber.prototype[rxSubscriber_1.rxSubscriber] = function () {
        return this;
    };
    return Subscriber;
})(Subscription_1.Subscription);
exports.Subscriber = Subscriber;
var SafeSubscriber = (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(next, error, complete) {
        _super.call(this);
        this._next = (typeof next === 'function') && tryOrThrowError_1.tryOrThrowError(next) || null;
        this._error = (typeof error === 'function') && tryOrThrowError_1.tryOrThrowError(error) || throwError_1.throwError;
        this._complete = (typeof complete === 'function') && tryOrThrowError_1.tryOrThrowError(complete) || null;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            this._next(value);
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            if (this._error) {
                this._error(err);
            }
            this.unsubscribe();
        }
    };
    SafeSubscriber.prototype.complete = function () {
        if (!this.isStopped) {
            if (this._complete) {
                this._complete();
            }
            this.unsubscribe();
        }
    };
    return SafeSubscriber;
})(Subscriber);
//# sourceMappingURL=Subscriber.js.map