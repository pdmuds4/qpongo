import { CouponRegisterReqDTO, CouponRegisterResDTO, type CouponRegisterResJson } from "~/models/dto/coupon_register";
import type AbsUseCase from "~/models/_abstruct/usecase";
import Message from "~/models/value_object/message";

export default class CouponRegisterUseCase implements AbsUseCase<CouponRegisterReqDTO, CouponRegisterResDTO> {
    request: CouponRegisterReqDTO;

    constructor(request: CouponRegisterReqDTO) {
        this.request = request;
    }

    async execute() {
        const response = await callApi(
            'POST',
            '/api/coupons',
            this.request.toJson()
        ) as CouponRegisterResJson;

        return new CouponRegisterResDTO(
            new Message(response.message)
        );
    }
}