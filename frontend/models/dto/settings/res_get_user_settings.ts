import AbsDTO from "~/models/_abstruct/dto";

export type GetUserSettingsResJson = {
    none: null
}

export default class GetUserSettingsResDTO extends AbsDTO<GetUserSettingsResJson> {
    toJson(): GetUserSettingsResJson {
        return {
            none: null
        }
    }
}