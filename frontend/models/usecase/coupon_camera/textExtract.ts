import TextExtractReqDTO from "~/models/dto/coupon_camera/req_text_extract";
import TextExtractResDTO from "~/models/dto/coupon_camera/res_text_extract";
import type AbsUseCase from "~/models/_abstruct/usecase";

export default class TextExtractUseCase implements AbsUseCase<TextExtractReqDTO, TextExtractResDTO> {
    request: TextExtractReqDTO;

    constructor(request: TextExtractReqDTO) {
        this.request = request;
    }

    async execute() {
        return;
    }
}