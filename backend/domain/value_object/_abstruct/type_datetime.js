class DatetimeValueObject {
    constructor(value) {
        this._value = this.typeCheck(value);
    }

    typeCheck(const_value) {
        if (const_value instanceof Date) {
            return const_value;
        } else {
            throw new Error('値が日時ではありません');
        }
    }
}

module.exports = DatetimeValueObject;