import AbsDTO from "~/models/_abstruct/dto";

export type CouponRegisterResJson = {
    none: null
}

export default class CouponRegisterResDTO extends AbsDTO<CouponRegisterResJson> {
    toJson(): CouponRegisterResJson {
        return {
            none: null
        }
    }
}