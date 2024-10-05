import AbsDTO from "~/models/_abstruct/dto";

export type DeleteCouponReqJson = {
    none: null
}

export default class DeleteCouponReqDTO extends AbsDTO<DeleteCouponReqJson> {
    toJson(): DeleteCouponReqJson {
        return {
            none: null
        }
    }
}