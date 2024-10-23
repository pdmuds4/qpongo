import GetCouponsReqDTO from "~/models/dto/coupon/req_get_coupon";
import GetCouponsResDTO from "~/models/dto/coupon/res_get_coupon";
import type AbsUseCase from "~/models/_abstruct/usecase";

export default class GetUserCouponsUsecase implements AbsUseCase<GetCouponsReqDTO, GetCouponsResDTO> {
    request: GetCouponsReqDTO;

    constructor(request: GetCouponsReqDTO) {
        this.request = request;
    }

    async execute() {
        return;
    }
}