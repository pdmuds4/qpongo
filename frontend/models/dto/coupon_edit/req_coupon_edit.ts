import AbsDTO from "~/models/_abstruct/dto";
import type CouponCategory from "~/models/value_object/coupon/category";
import type CouponDeadLine from "~/models/value_object/coupon/deadline";
import type CouponDiscount from "~/models/value_object/coupon/discount";
import type CouponGoods from "~/models/value_object/coupon/goods";
import type CouponPhoto from "~/models/value_object/coupon/photo";
import type CouponStore from "~/models/value_object/coupon/store";
import type CreateDate from "~/models/value_object/create_date";
import type Id from "~/models/value_object/id";

export type CouponEditReqJson = {
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

export default class CouponEditReqDTO extends AbsDTO<CouponEditReqJson> {
    id: Id;
    user_id: Id;
    goods: CouponGoods;
    discount: CouponDiscount;
    store: CouponStore;
    deadline: CouponDeadLine;
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
        deadline: CouponDeadLine,
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

    toJson(): CouponEditReqJson {
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