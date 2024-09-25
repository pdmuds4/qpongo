const BaseString = require('../_abstruct/type_string');

class ContentValueObject extends BaseString {
    constructor(value) {
        super(value)
        this._value = this.valueCheck(this._value);
    }

    valueCheck(value_object) {
        if (!(value_object.length >= 1)) throw new Error('内容は1文字以上でないといけません');

        return value_object;
    }
}

module.exports = ContentValueObject;