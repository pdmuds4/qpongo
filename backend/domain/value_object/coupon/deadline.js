const BaseDatetime = require('../_abstruct/type_datetime');

class DeadlineValueObject extends BaseDatetime {
    constructor(value) {
        super(value)
        this._value = this.valueCheck(this._value);
    }

    valueCheck(const_value) {
        const japan_time = new Date().toLocaleString("ja-JP", {timeZone: "Asia/Tokyo"});
        if (!(new Date(japan_time) <= const_value)) throw new Error('期限は過去ではいけません');

        return const_value;
    }
}

module.exports = DeadlineValueObject;