import AbsDTO from "~/models/_abstruct/dto";
import type Id from "~/models/value_object/id";

export type GetCouponReqJson = {
    coupon_id: number;
}

export default class GetCouponReqDTO extends AbsDTO<GetCouponReqJson> {
    coupon_id: Id;

    constructor(coupon_id: Id) {
        super();
        this.coupon_id = coupon_id;
    }


    toJson(): GetCouponReqJson {
        return {
            coupon_id: this.coupon_id.value
        }
    }
}