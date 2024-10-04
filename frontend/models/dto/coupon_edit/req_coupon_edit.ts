import AbsDTO from "~/models/_abstruct/dto";

export type CouponEditReqJson = {
    none: null
}

export default class CouponEditReqDTO extends AbsDTO<CouponEditReqJson> {
    toJson(): CouponEditReqJson {
        return {
            none: null
        }
    }
}