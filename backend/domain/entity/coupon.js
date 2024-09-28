class CouponEntity {
    constructor(id, user_id, goods, discount, store, deadline, photo_front, photo_back, is_use, category, create_date) {
        this._id = id;
        this.user_id = user_id;
        this.goods = goods;
        this.discount = discount;
        this.store = store;
        this.deadline = deadline;
        this.photo_front = photo_front;
        this.photo_back = photo_back;
        this.is_use = is_use;
        this.category = category;
        this.create_date = create_date;

        if (!(this._id && this.user_id && this.goods && this.discount && this.store && this.deadline && this.photo_front && this.photo_back && this.is_use && this.category && this.create_date)) {
            throw new Error('クーポンエンティティの生成に失敗しました');
        }
    }

    get id() {
        return this._id;
    }

    toJson() {
        return {
            id: this._id.value,
            user_id: this.user_id.value,
            goods: this.goods.value,
            discount: this.discount.value,
            store: this.store.value,
            deadline: this.deadline.value,
            photo_front: this.photo_front.value,
            photo_back: this.photo_back.value,
            is_use: this.is_use.value,
            category: this.category.value,
            create_date: this.create_date.value
        };
    }
}

module.exports = CouponEntity;