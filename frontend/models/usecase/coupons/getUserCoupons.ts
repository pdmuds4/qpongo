import GetUserCouponsReqDTO from "~/models/dto/coupons/req_get_user_coupons";
import GetUserCouponsResDTO from "~/models/dto/coupons/res_get_user_coupons";
import type AbsUseCase from "~/models/_abstruct/usecase";

export default class GetUserCouponsUsecase implements AbsUseCase<GetUserCouponsReqDTO, GetUserCouponsResDTO> {
    request: GetUserCouponsReqDTO;

    constructor(request: GetUserCouponsReqDTO) {
        this.request = request;
    }

    async execute() {
        return;
    }
}