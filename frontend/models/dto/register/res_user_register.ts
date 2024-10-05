import AbsDTO from "~/models/_abstruct/dto";

export type UserRegisterResJson = {
    none: null
}

export default class UserRegisterResDTO extends AbsDTO<UserRegisterResJson> {
    toJson(): UserRegisterResJson {
        return {
            none: null
        }
    }
}