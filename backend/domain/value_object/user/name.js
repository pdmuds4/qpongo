const BaseString = require('../_abstruct/type_string');

class NameValueObject extends BaseString {
    constructor(value) {
        super(value)
        this._value = this.valueCheck(this._value);
    }

    valueCheck(const_value) {
        if (!(1 <= const_value.length && const_value.length <= 8)) throw new Error('名前は1文字以上8文字以下でなればいけません');

        return const_value;
    }
}

module.exports = NameValueObject;