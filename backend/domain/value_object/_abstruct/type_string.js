class StringValueObject {
    constructor(value, validationCallBack) {
        this._value = this.typeCheck(value, validationCallBack);
    }

    typeCheck(const_value, validationCallBack) {
        if (typeof const_value != 'string') throw new Error('値が文字列ではありません');
        
        return validationCallBack(const_value);
    }
}

module.exports = StringValueObject;