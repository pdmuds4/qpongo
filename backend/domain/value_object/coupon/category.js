const BaseString = require('../_abstruct/type_string');

class CategoryValueObject extends BaseString {
    constructor(value) {
        super(value)
        this._value = this.valueCheck(this._value);
    }

    valueCheck(const_value) {
        if (!['飲食', 'ファッション', 'イベント', '旅行', 'ホビー・エンターテイメント', '健康・美容', 'その他'].includes(const_value)) throw new Error('カテゴリーは飲食、ファッション、イベント、旅行、ホビー・エンターテイメント、健康・美容、その他のどれかでなければいけません');

        return const_value;
    }
}

module.exports = CategoryValueObject;