import AbsDTO from "~/models/_abstruct/dto";

export type CouponEditResJson = {
    none: null
}

export default class CouponEditResDTO extends AbsDTO<CouponEditResJson> {
    toJson(): CouponEditResJson {
        return {
            none: null
        }
    }
}