import type AbsUseCase from "~/models/_abstruct/usecase";
import type RetakePhotoReqDTO from "~/models/dto/coupon_register/req_retake_photo";
import type RetakePhotoResDTO from "~/models/dto/coupon_register/res_retake_photo";

export default class RetakePhotoUseCase implements AbsUseCase<RetakePhotoReqDTO, RetakePhotoResDTO> {
    request: RetakePhotoReqDTO;

    constructor(request: RetakePhotoReqDTO) {
        this.request = request;
    }

    async execute() {
        return;
    }
}