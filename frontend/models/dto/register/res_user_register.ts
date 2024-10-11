import AbsDTO from "~/models/_abstruct/dto";
import type Id from "~/models/value_object/id";

export type UserRegisterResJson = {
    user_id: number
}

export default class UserRegisterResDTO extends AbsDTO<UserRegisterResJson> {
    user_id: Id;

    constructor(
        user_id: Id
    ) {
        super();
        this.user_id = user_id;
    }

    toJson(): UserRegisterResJson {
        return {
            user_id: this.user_id.value
        }
    }
}