var find_support_1 = require('./find-support');
/**
 * Returns an Observable that searches for the first item in the source Observable that
 * matches the specified condition, and returns the first occurence in the source.
 * @param {function} predicate function called with each item to test for condition matching.
 * @returns {Observable} an Observable of the first item that matches the condition.
 */
function find(predicate, thisArg) {
    if (typeof predicate !== 'function') {
        throw new TypeError('predicate is not a function');
    }
    return this.lift(new find_support_1.FindValueOperator(predicate, this, false, thisArg));
}
exports.find = find;
//# sourceMappingURL=find.js.map