class BoolValueObject {
    constructor(value) {
        this._value = this.typeCheck(value);
    }

    typeCheck(const_value) {
        if (typeof const_value != 'boolean') throw new Error('値が真偽値ではありません');
        
        return const_value;
    }

    get value() {
        return this._value;
    }
}

module.exports = BoolValueObject;