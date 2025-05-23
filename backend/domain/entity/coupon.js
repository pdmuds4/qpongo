class CouponEntity {
    constructor(id, user_id, goods, discount, store, deadline, photo_front, photo_back, is_used, category, create_date) {
        this._id = id;
        this._user_id = user_id;
        this.goods = goods;
        this.discount = discount;
        this.store = store;
        this.deadline = deadline;
        this.photo_front = photo_front;
        this.photo_back = photo_back;
        this.is_used = is_used;
        this.category = category;
        this.create_date = create_date;

        if (!(this._id && this._user_id && this.goods && this.discount && this.store && this.deadline && this.photo_front && this.photo_back && this.is_used && this.category && this.create_date)) {
            throw new Error('クーポンエンティティの生成に失敗しました');
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
            goods: this.goods.value,
            discount: this.discount.value,
            store: this.store.value,
            deadline: this.deadline.value,
            photo_front: this.photo_front.value,
            photo_back: this.photo_back.value,
            is_used: this.is_used.value,
            category: this.category.value,
            create_date: this.create_date.value
        };
    }
}

module.exports = CouponEntity;