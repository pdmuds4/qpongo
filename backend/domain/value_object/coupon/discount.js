const BaseString = require('../_abstruct/type_string');

class DiscountValueObject extends BaseString {
    constructor(value) {
        super(value)
        this._value = this.valueCheck(this._value);
    }

    valueCheck(const_value) {
        if (!(1 <= const_value.length)) throw new Error('割引内容は1文字以上でなればいけません');

        return const_value;
    }
}

module.exports = DiscountValueObject;