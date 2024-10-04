import AbsDTO from "~/models/_abstruct/dto";

export type UpdateSettingsResJson = {
    none: null
}

export default class UpdateSettingsResDTO extends AbsDTO<UpdateSettingsResJson> {
    toJson(): UpdateSettingsResJson {
        return {
            none: null
        }
    }
}