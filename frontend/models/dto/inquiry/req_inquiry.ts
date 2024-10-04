import AbsDTO from "~/models/_abstruct/dto";

export type InquiryReqJson = {
    none: null
}

export default class InquiryReqDTO extends AbsDTO<InquiryReqJson> {
    toJson(): InquiryReqJson {
        return {
            none: null
        }
    }
}