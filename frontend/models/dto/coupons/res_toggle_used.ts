import AbsDTO from "~/models/_abstruct/dto";

export type ToggleUsedResJson = {
    none: null
}

export default class ToggleUsedResDTO extends AbsDTO<ToggleUsedResJson> {
    toJson(): ToggleUsedResJson {
        return {
            none: null
        }
    }
}