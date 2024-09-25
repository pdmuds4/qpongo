const BaseInteger = require('../_abstruct/type_integer');

class Notice extends BaseInteger {
    constructor(value) {
        super(value);
        this._value = this.valueCheck(this._value);
    }

    valueCheck(const_value) {
        if (!(1 <= const_value && const_value <= 14)) throw new Error('通知設定は1以上14以下でなければいけません');
    
        return const_value;
    }
}

module.exports = Notice;