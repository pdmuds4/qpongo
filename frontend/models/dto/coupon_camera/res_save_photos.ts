import AbsDTO from "~/models/_abstruct/dto";

export type SavePhotosResJson = {
    none: null
}

export default class SavePhotosResDTO extends AbsDTO<SavePhotosResJson> {
    toJson(): SavePhotosResJson {
        return {
            none: null
        }
    }
}