class InQuiryEntity {
    constructor(id, user_id, title, content, is_suppotr, sending_date) {
        this._id = id;
        this._user_id = user_id;
        this.title = title;
        this.content = content;
        this.is_support = is_suppotr;
        this.sending_date = sending_date;

        if (!(this._id && this._user_id && this.title && this.content && this.is_support && this.sending_date)) {
            throw new Error('問い合わせエンティティの生成に失敗しました');
        }
    }

    get id() {
        return this._id;
    }

    get user_id() {
        return this._user_id;
    }

    toJson() {
        return {
            id: this._id.value,
            user_id: this._user_id.value,
            title: this.title.value,
            content: this.content.value,
            is_support: this.is_support.value,
            sending_date: this.sending_date.value
        };
    }
}

module.exports = InQuiryEntity;