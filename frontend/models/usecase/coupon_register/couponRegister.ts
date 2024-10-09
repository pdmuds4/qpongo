import type AbsUseCase from "~/models/_abstruct/usecase";
import type CouponRegisterReqDTO from "~/models/dto/coupon_register/req_coupon_register";
import type CouponRegisterResDTO from "~/models/dto/coupon_register/res_coupon_register";

export default class CouponRegisterUseCase implements AbsUseCase<CouponRegisterReqDTO, CouponRegisterResDTO> {
    request: CouponRegisterReqDTO;

    constructor(request: CouponRegisterReqDTO) {
        this.request = request;
    }

    async execute() {
        return;
    }
}