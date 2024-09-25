const BaseString = require('../_abstruct/type_string');

class PhotoValueObject extends BaseString {
    constructor(value) {
        super(value)
        this._value = this.valueCheck(this._value);
    }

    valueCheck(const_value) {
        const regex = /^(https?:\/\/)?([a-z\d-]+\.)+[a-z]{2,6}(\/[\w\d#?&%=.-]*)*\/?$/i;

        if (!regex.test(const_value)) throw new Error('URL形式でなければいけません');

        return const_value;
    }
}

module.exports = PhotoValueObject;