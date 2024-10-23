class StringValueObject {
    constructor(value) {
        this._value = this.typeCheck(value);
    }

    typeCheck(const_value) {
        if (typeof const_value != 'string') throw new Error('値が文字列ではありません');
        
        return const_value;
    }

    get value() {
        return this._value;
    }
}

module.exports = StringValueObject;