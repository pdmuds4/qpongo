import AbsDTO from "~/models/_abstruct/dto";

export type TextExtractResJson = {
    none: null
}

export default class TextExtractResDTO extends AbsDTO<TextExtractResJson> {
    toJson(): TextExtractResJson {
        return {
            none: null
        }
    }
}