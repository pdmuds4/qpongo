class InQuiryEntity {
    constructor(id, name, is_support, e_mail, content, sending_date) {
        this._id = id;
        this._name = name;
        this.is_support = is_support;
        this.e_mail = e_mail;
        this.content = content;
        this.sending_date = sending_date;

        if (!(this._id && this._name && this.is_support && this.e_mail && this.content && this.sending_date)) {
            throw new Error('問い合わせエンティティの生成に失敗しました');
        }
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    toJson() {
        return {
            id: this._id.value,
            name: this._name.value,
            is_support: this.is_support.value,
            e_mail: this.e_mail.value,
            content: this.content.value,
            sending_date: this.sending_date.value
        };
    }
}

module.exports = InQuiryEntity;