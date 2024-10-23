import AbsDTO from "~/models/_abstruct/dto";
import type Id from "~/models/value_object/id";
import type CouponCategory from "~/models/value_object/coupon/category";
import type CouponDeadLine from "~/models/value_object/coupon/deadline";
import type CouponDiscount from "~/models/value_object/coupon/discount";
import type CouponGoods from "~/models/value_object/coupon/goods";
import type CouponPhoto from "~/models/value_object/coupon/photo";
import type CouponStore from "~/models/value_object/coupon/store";

export type CouponRegisterReqJson = {
    user_id: number;
    goods: string;
    discount: string;
    store: string;
    deadline: Date;
    photo_front: string;
    photo_back: string;
    category: couponCategoryEnums;
}

export default class CouponRegisterReqDTO extends AbsDTO<CouponRegisterReqJson> {
    user_id: Id;
    goods: CouponGoods;
    discount: CouponDiscount;
    store: CouponStore;
    deadline: CouponDeadLine;
    photo_front: CouponPhoto;
    photo_back: CouponPhoto;
    category: CouponCategory;

    constructor(
        user_id: Id,
        goods: CouponGoods,
        discount: CouponDiscount,
        store: CouponStore,
        deadline: CouponDeadLine,
        photo_front: CouponPhoto,
        photo_back: CouponPhoto,
        category: CouponCategory
    ) {
        super();
        this.user_id = user_id;
        this.goods = goods;
        this.discount = discount;
        this.store = store;
        this.deadline = deadline;
        this.photo_front = photo_front;
        this.photo_back = photo_back;
        this.category = category;
    }
    
    toJson(): CouponRegisterReqJson {
        return {
            user_id: this.user_id.value,
            goods: this.goods.value,
            discount: this.discount.value,
            store: this.store.value,
            deadline: this.deadline.value,
            photo_front: this.photo_front.value,
            photo_back: this.photo_back.value,
            category: this.category.value
        }
    }
}