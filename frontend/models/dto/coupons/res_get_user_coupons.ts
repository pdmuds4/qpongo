import AbsDTO from "~/models/_abstruct/dto";

export type GetUserCouponsResJson = {
    none: null
}

export default class GetUserCouponsResDTO extends AbsDTO<GetUserCouponsResJson> {
    toJson(): GetUserCouponsResJson {
        return {
            none: null
        }
    }
}