import AbsDTO from "~/models/_abstruct/dto";
import type Id from "~/models/value_object/id";

export type GetUserInfoReqJson = {
    user_id: number;
}

export default class GetUserInfoReqDTO extends AbsDTO<GetUserInfoReqJson> {
    user_id: Id;

    constructor(user_id: Id) {
        super();
        this.user_id = user_id;
    }
    
    toJson(): GetUserInfoReqJson {
        return {
            user_id: this.user_id.value
        }
    }
}