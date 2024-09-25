const BaseString = require('../_abstruct/type_string');

class EmailValueObject extends BaseString {
    constructor(value) {
        super(value)
        this._value = this.valueCheck(this._value);
    }

    valueCheck(const_value) {
        const regex = /^[\w+\-.]+@[a-z\d\-.]+\.[a-z]+$/i;
        
        if (!regex.test(const_value)) throw new Error('メールアドレスの形式が正しくありません');

        return const_value;
    }
}

module.exports = EmailValueObject;