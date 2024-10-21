import AbsDTO from "~/models/_abstruct/dto";
import type Id from "~/models/value_object/id";

export type UserLoginResJson = {
    user_id: number;
}

export default class UserLoginResDTO extends AbsDTO<UserLoginResJson> {
    user_id: Id

    constructor(user_id: Id) {
        super();
        this.user_id = user_id;
    }

    toJson(): UserLoginResJson {
        return {
            user_id: this.user_id.value
        }
    }
}