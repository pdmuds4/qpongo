const BaseString = require('../_abstruct/type_string');

class PasswordValueObject extends BaseString {
    constructor(value) {
        super(value)
        this._value = this.valueCheck(this._value);
    }

    valueCheck(const_value) {
        if (!(8 <= const_value.length && const_value.length <= 16)) throw new Error('パスワードは8文字以上16文字以下でなればいけません');

        if (!const_value.match(/^[a-zA-Z0-9-_.]+$/)) throw new Error('パスワードは半角英数字と -_. 以外は使用できません');

        return const_value;
    }
}

module.exports = PasswordValueObject;