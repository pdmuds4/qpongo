import AbsDTO from "~/models/_abstruct/dto";

export type GetUserCouponsReqJson = {
    none: null
}

export default class GetUserCouponsReqDTO extends AbsDTO<GetUserCouponsReqJson> {
    toJson(): GetUserCouponsReqJson {
        return {
            none: null
        }
    }
}