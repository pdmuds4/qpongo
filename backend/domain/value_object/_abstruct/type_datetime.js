class DatetimeValueObject {
    constructor(value, validationCallBack) {
        this._value = this.typeCheck(value, validationCallBack);
    }

    typeCheck(const_value, validationCallBack) {
        if (!(const_value instanceof Date)) throw new Error('値が日時ではありません');

        return validationCallBack(const_value);
    }
}

module.exports = DatetimeValueObject;