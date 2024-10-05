import AbsDTO from "~/models/_abstruct/dto";

export type DeleteCouponResJson = {
    none: null
}

export default class DeleteCouponResDTO extends AbsDTO<DeleteCouponResJson> {
    toJson(): DeleteCouponResJson {
        return {
            none: null
        }
    }
}