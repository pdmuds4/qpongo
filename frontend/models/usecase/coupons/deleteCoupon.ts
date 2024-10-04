import DeleteCouponReqDTO from "~/models/dto/coupons/req_delete_coupon";
import DeleteCouponResDTO from "~/models/dto/coupons/res_delete_coupon";
import type AbsUsecase from "~/models/_abstruct/usecase";


export default class DeleteCouponUsecase implements AbsUsecase<DeleteCouponReqDTO, DeleteCouponResDTO> {
    request: DeleteCouponReqDTO;

    constructor(request: DeleteCouponReqDTO) {
        this.request = request;
    }

    async execute() {
        return;
    }
}