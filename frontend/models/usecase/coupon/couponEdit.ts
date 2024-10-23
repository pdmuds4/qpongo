import { CouponEditReqDTO, CouponEditResDTO, type CouponEditResJson } from "~/models/dto/coupon";
import type AbsUseCase from "~/models/_abstruct/usecase";
import Message from "~/models/value_object/message";

export default class CouponEditUseCase implements AbsUseCase<CouponEditReqDTO, CouponEditResDTO> {
    request: CouponEditReqDTO;

    constructor(request: CouponEditReqDTO) {
        this.request = request;
    }

    async execute() {
        const response = await callApi(
            'PUT',
            '/api/coupons',
            this.request.toJson()
        ) as CouponEditResJson;


        return new CouponEditResDTO(
            new Message(response.message)
        )
    }
}