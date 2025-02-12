import AbsDTO from "~/models/_abstruct/dto";
import type Id from "~/models/value_object/id";

export type GetUserSettingsReqJson = {
    user_id: number;
}

export default class GetUserSettingsReqDTO extends AbsDTO<GetUserSettingsReqJson> {
    user_id: Id;

    constructor(user_id: Id) {
        super();
        this.user_id = user_id;
    }

    toJson(): GetUserSettingsReqJson {
        return {
            user_id: this.user_id.value
        }
    }
}