import AbsDTO from "~/models/_abstruct/dto";

export type InquiryResJson = {
    none: null
}

export default class InquiryResDTO extends AbsDTO<InquiryResJson> {
    toJson(): InquiryResJson {
        return {
            none: null
        }
    }
}