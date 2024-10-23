import AbsDTO from "~/models/_abstruct/dto";
import type Id from "~/models/value_object/id";

export type GetUserCouponsReqJson = {
    user_id: number;
}

export default class GetUserCouponsReqDTO extends AbsDTO<GetUserCouponsReqJson> {
    user_id: Id;

    constructor(user_id: Id) {
        super();
        this.user_id = user_id;
    }

    toJson(): GetUserCouponsReqJson {
        return {
            user_id: this.user_id.value
        }
    }
}