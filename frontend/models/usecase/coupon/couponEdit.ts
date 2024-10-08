import type CouponEditReqDTO from "~/models/dto/coupon_edit/req_coupon_edit";
import type CouponEditResDTO from "~/models/dto/coupon_edit/res_coupon_edit";
import type AbsUseCase from "~/models/_abstruct/usecase";

export default class CouponEditUseCase implements AbsUseCase<CouponEditReqDTO, CouponEditResDTO> {
    request: CouponEditReqDTO;

    constructor(request: CouponEditReqDTO) {
        this.request = request;
    }

    async execute() {
        return;
    }
}