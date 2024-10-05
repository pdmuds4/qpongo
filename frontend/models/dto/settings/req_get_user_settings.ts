import AbsDTO from "~/models/_abstruct/dto";

export type GetUserSettingsReqJson = {
    none: null
}

export default class GetUserSettingsReqDTO extends AbsDTO<GetUserSettingsReqJson> {
    toJson(): GetUserSettingsReqJson {
        return {
            none: null
        }
    }
}