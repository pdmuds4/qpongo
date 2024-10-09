import AbsDTO from "~/models/_abstruct/dto";
import type CouponCategory from "~/models/value_object/coupon/category";
import type CouponDeadLine from "~/models/value_object/coupon/deadline";
import type CouponDiscount from "~/models/value_object/coupon/discount";
import type CouponGoods from "~/models/value_object/coupon/goods";
import type CouponStore from "~/models/value_object/coupon/store";

export type TextExtractResJson = {
    goods: string;
    discount: string;
    store: string;
    deadline: Date;
    category: couponCategoryEnums;
}

export default class TextExtractResDTO extends AbsDTO<TextExtractResJson> {
    goods: CouponGoods;
    discount: CouponDiscount;
    store: CouponStore;
    deadline: CouponDeadLine;
    category: CouponCategory;

    constructor(
        goods: CouponGoods,
        discount: CouponDiscount,
        store: CouponStore,
        deadline: CouponDeadLine,
        category: CouponCategory
    ) {
        super();
        this.goods = goods;
        this.discount = discount;
        this.store = store;
        this.deadline = deadline;
        this.category = category;
    }
    
    toJson(): TextExtractResJson {
        return {
            goods: this.goods.value,
            discount: this.discount.value,
            store: this.store.value,
            deadline: this.deadline.value,
            category: this.category.value
        }
    }
}