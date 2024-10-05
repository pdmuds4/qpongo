import AbsDTO from "~/models/_abstruct/dto";

export type CouponRegisterReqJson = {
    none: null
}

export default class CouponRegisterReqDTO extends AbsDTO<CouponRegisterReqJson> {
    toJson(): CouponRegisterReqJson {
        return {
            none: null
        }
    }
}