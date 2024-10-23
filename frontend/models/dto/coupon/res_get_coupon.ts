import AbsDTO from "~/models/_abstruct/dto";
import { CouponCategory, CouponDeadline, CouponDiscount, CouponGoods, CouponPhoto, CouponStore } from "~/models/value_object/coupon";

import Id from "~/models/value_object/id";
import type { couponCategoryEnums } from "~/models/value_object/enums";
import CreateDate from "~/models/value_object/create_date";

export type GetCouponResJson = {
    id: number;
    user_id: number;
    goods: string;
    discount: string;
    store: string;
    deadline: Date;
    photo_front: string;
    photo_back: string;
    is_used: boolean;
    category: couponCategoryEnums;
    create_date: Date;
}

export default class GetCouponResDTO extends AbsDTO<GetCouponResJson> {
    id: Id;
    user_id: Id;
    goods: CouponGoods;
    discount: CouponDiscount;
    store: CouponStore;
    deadline: CouponDeadline;
    photo_front: CouponPhoto;
    photo_back: CouponPhoto;
    is_used: boolean;
    category: CouponCategory;
    create_date: CreateDate;

    constructor(
        id: Id,
        user_id: Id,
        goods: CouponGoods,
        discount: CouponDiscount,
        store: CouponStore,
        deadline: CouponDeadline,
        photo_front: CouponPhoto,
        photo_back: CouponPhoto,
        is_used: boolean,
        category: CouponCategory,
        create_date: CreateDate
    ) {
        super();
        this.id = id;
        this.user_id = user_id;
        this.goods = goods;
        this.discount = discount;
        this.store = store;
        this.deadline = deadline;
        this.photo_front = photo_front;
        this.photo_back = photo_back;
        this.is_used = is_used;
        this.category = category;
        this.create_date = create_date;
    }
    
    toJson(): GetCouponResJson {
        return {
            id: this.id.value,
            user_id: this.user_id.value,
            goods: this.goods.value,
            discount: this.discount.value,
            store: this.store.value,
            deadline: this.deadline.value,
            photo_front: this.photo_front.value,
            photo_back: this.photo_back.value,
            is_used: this.is_used,
            category: this.category.value,
            create_date: this.create_date.value
        }
    }
}