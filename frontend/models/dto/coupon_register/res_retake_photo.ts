import AbsDTO from "~/models/_abstruct/dto";

export type RetakePhotoResJson = {
    none: null
}

export default class RetakePhotoResDTO extends AbsDTO<RetakePhotoResJson> {
    toJson(): RetakePhotoResJson {
        return {
            none: null
        }
    }
}