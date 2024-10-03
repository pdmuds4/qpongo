import AbsDTO from "~/models/_abstruct/dto";

export type RetakePhotoReqJson = {
    none: null
}

export default class RetakePhotoReqDTO extends AbsDTO<RetakePhotoReqJson> {
    toJson(): RetakePhotoReqJson {
        return {
            none: null
        }
    }
}