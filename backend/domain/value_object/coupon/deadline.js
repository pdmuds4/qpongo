const BaseDatetime = require('../_abstruct/type_datetime');

class DeadlineValueObject extends BaseDatetime {
    constructor(value) {
        super(value)
        this._value = this.valueCheck(this._value);
    }

    valueCheck(const_value) {
        if (!(new Date() <= const_value)) throw new Error('期限は過去ではいけません');

        return const_value;
    }
}

module.exports = DeadlineValueObject;