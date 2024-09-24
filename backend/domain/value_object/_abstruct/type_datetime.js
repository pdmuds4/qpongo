class DatetimeValueObject {
    constructor(value) {
        this._value = this.typeCheck(value);
    }

    typeCheck(const_value) {
        if (!(const_value instanceof Date)) throw new Error('値が日時ではありません');

        return const_value;
    }
}

module.exports = DatetimeValueObject;