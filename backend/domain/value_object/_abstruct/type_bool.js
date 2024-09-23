class BoolValueObject {
    constructor(value) {
        this._value = this.typeCheck(value);
    }

    typeCheck(const_value) {
        if (typeof const_value == 'boolean') {
            return const_value;
        } else {
            throw new Error('値が真偽値ではありません');
        }
    }
}

module.exports = BoolValueObject;