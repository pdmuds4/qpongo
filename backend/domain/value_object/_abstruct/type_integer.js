class IntegerValueObject {
    constructor(value) {
        this._value = this.typeCheck(value);
    }

    typeCheck(const_value) {
        if (!Number.isInteger(const_value)) throw new Error('値が整数ではありません');

        return const_value;
    }

    get value() {
        return this._value;
    }
}

module.exports = IntegerValueObject;