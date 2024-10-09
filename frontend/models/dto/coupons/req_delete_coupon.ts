import AbsDTO from "~/models/_abstruct/dto";
import type Id from "~/models/value_object/id";

export type DeleteCouponReqJson = {
    coupon_id: number;
}

export default class DeleteCouponReqDTO extends AbsDTO<DeleteCouponReqJson> {
    coupon_id: Id;

    constructor(coupon_id: Id) {
        super();
        this.coupon_id = coupon_id;
    }


    toJson(): DeleteCouponReqJson {
        return {
            coupon_id: this.coupon_id.value
        }
    }
}