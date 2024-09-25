const BaseInteger = require('../_abstruct/type_integer');

class AgeValueObject extends BaseInteger {
    constructor(value) {
        super(value)
        this._value = this.valueCheck(this._value);
    }

    valueCheck(const_value) {
        if (const_value < 0) throw new Error('年齢は0以上でなければいけません');

        if (!(1 <= String(const_value).length && String(const_value).length <= 3)) throw new Error('年齢は1桁以上3桁以下でなればいけません');

        return const_value;
    }
}

module.exports = AgeValueObject;