import AbsDTO from "~/models/_abstruct/dto";

export type SavePhotosReqJson = {
    none: null
}

export default class SavePhotosReqDTO extends AbsDTO<SavePhotosReqJson> {
    toJson(): SavePhotosReqJson {
        return {
            none: null
        }
    }
}