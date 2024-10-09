import AbsValueObject from "~/models/_abstruct/value_object";

import type { couponCategoryEnums } from "../enums";

export default class CouponCategory extends AbsValueObject<couponCategoryEnums> {
    validate(const_val: couponCategoryEnums) {
        return const_val;
    }
}