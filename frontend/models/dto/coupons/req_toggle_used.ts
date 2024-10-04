import AbsDTO from "~/models/_abstruct/dto";

export type ToggleUsedReqJson = {
    none: null
}

export default class ToggleUsedReqDTO extends AbsDTO<ToggleUsedReqJson> {
    toJson(): ToggleUsedReqJson {
        return {
            none: null
        }
    }
}