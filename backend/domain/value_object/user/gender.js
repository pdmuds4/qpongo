const BaseString = require('../_abstruct/type_string');

class GenderValueObject extends BaseString {
    constructor(value) {
        super(value)
        this._value = this.valueCheck(this._value);
    }

    valueCheck(const_value) {
        if (const_value !== '男性' && const_value !== '女性' && const_value !== 'その他') throw new Error('性別は男性か女性かその他でなければいけません');

        return const_value;
    }
}

module.exports = GenderValueObject;