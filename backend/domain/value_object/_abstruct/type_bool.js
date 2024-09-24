class BoolValueObject {
    constructor(value, validationCallBack) {
        this._value = this.typeCheck(value, validationCallBack);
    }

    typeCheck(const_value, validationCallBack) {
        if (typeof const_value != 'boolean') throw new Error('値が真偽値ではありません');
        
        return validationCallBack(const_value);
    }
}

module.exports = BoolValueObject;