import AbsDTO from "~/models/_abstruct/dto";
import type Id from "~/models/value_object/id";

export type UserRegisterReqJson = {
    user_id: Id;
}

export default class UserRegisterReqDTO extends AbsDTO<UserRegisterReqJson> {
    user_id: Id;

    constructor(user_id: Id) {
        super();
        this.user_id = user_id;
    }

    toJson(): UserRegisterReqJson {
        return {
            user_id: this.user_id,
        }
    }
}