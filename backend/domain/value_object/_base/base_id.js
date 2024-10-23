const BaseInteger = require('../_abstruct/type_integer');

class IDValueObject extends BaseInteger {
    constructor(value) {
        super(value)
        this._value = this.valueCheck(this._value);
    }

    valueCheck(const_value) {
        if (const_value <= 0) throw new Error('IDは0以下ではいけません');

        return const_value;
    }
}

module.exports = IDValueObject;