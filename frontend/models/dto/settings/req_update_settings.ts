import AbsDTO from "~/models/_abstruct/dto";
import type Id from "~/models/value_object/id";
import type SettingNotice from "~/models/value_object/setting/notice";

export type UpdateSettingsReqJson = {
    user_id: number;
    notice: number;
}

export default class UpdateSettingsReqDTO extends AbsDTO<UpdateSettingsReqJson> {
    user_id: Id;
    notice: SettingNotice;

    constructor(user_id: Id, notice: SettingNotice) {
        super();
        this.user_id = user_id;
        this.notice = notice;
    }
    
    toJson(): UpdateSettingsReqJson {
        return {
            user_id: this.user_id.value,
            notice: this.notice.value
        }
    }
}