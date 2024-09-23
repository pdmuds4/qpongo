class IntegerValueObject {
    constructor(value) {
        this._value = this.typeCheck(value);
    }

    typeCheck(const_value) {
        if (Number.isInteger(const_value)) {
            return const_value;
        } else {
            throw new Error('値が整数ではありません');
        }
    }
}

module.exports = IntegerValueObject;