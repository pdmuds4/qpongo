const BaseString = require('../_abstruct/type_string');

class PasswordValueObject extends BaseString {
    constructor(value) {
        super(value)
    }
}

module.exports = PasswordValueObject;