import AbsDTO from "~/models/_abstruct/dto";

export type UserRegisterReqJson = {
    none: null
}

export default class UserRegisterReqDTO extends AbsDTO<UserRegisterReqJson> {
    toJson(): UserRegisterReqJson {
        return {
            none: null
        }
    }
}