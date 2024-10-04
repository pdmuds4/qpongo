import AbsDTO from "~/models/_abstruct/dto";

export type GetUserInfoResJson = {
    none: null
}

export default class GetUserInfoResDTO extends AbsDTO<GetUserInfoResJson> {
    toJson(): GetUserInfoResJson {
        return {
            none: null
        }
    }
}