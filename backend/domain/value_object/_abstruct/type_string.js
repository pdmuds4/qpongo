class StringValueObject {
    constructor(value) {
        this._value = this.typeCheck(value);
    }

    typeCheck(const_value) {
        if (typeof const_value == 'string') {
            return const_value;
        } else {
            throw new Error('値が文字列ではありません');
        }
    }
}

module.exports = StringValueObject;