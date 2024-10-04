import AbsDTO from "~/models/_abstruct/dto";

export type UpdateSettingsReqJson = {
    none: null
}

export default class UpdateSettingsReqDTO extends AbsDTO<UpdateSettingsReqJson> {
    toJson(): UpdateSettingsReqJson {
        return {
            none: null
        }
    }
}