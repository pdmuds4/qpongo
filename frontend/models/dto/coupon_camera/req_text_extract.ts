import AbsDTO from "~/models/_abstruct/dto";

export type TextExtractReqJson = {
    none: null
}

export default class TextExtractReqDTO extends AbsDTO<TextExtractReqJson> {
    toJson(): TextExtractReqJson {
        return {
            none: null
        }
    }
}