var Person = (function () {
    function Person(id, firstName, lastName, dateOfBirth) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
    }
    return Person;
})();
exports.Person = Person;
