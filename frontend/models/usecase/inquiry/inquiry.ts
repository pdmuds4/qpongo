import InquiryReqDTO from "~/models/dto/inquiry/req_inquiry";
import InquiryResDTO from "~/models/dto/inquiry/res_inquiry";
import type AbsUsecase from "~/models/_abstruct/usecase";

export default class InquiryUsecase implements AbsUsecase<InquiryReqDTO, InquiryResDTO> {
    request: InquiryReqDTO;

    constructor(request: InquiryReqDTO) {
        this.request = request;
    }

    async execute() {
        return;
    }
}