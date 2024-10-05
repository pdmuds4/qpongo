import AbsDTO from "~/models/_abstruct/dto";

export type GetUserInfoReqJson = {
    none: null
}

export default class GetUserInfoReqDTO extends AbsDTO<GetUserInfoReqJson> {
    toJson(): GetUserInfoReqJson {
        return {
            none: null
        }
    }
}