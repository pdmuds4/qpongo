class IntegerValueObject {
    constructor(value, validationCallBack) {
        this._value = this.typeCheck(value, validationCallBack);
    }

    typeCheck(const_value, validationCallBack) {
        if (!Number.isInteger(const_value)) throw new Error('値が整数ではありません');

        return validationCallBack(const_value);
    }
}

module.exports = IntegerValueObject;