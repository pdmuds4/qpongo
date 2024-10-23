import GetUserCouponsReqDTO from "~/models/dto/coupons/req_get_user_coupons";
import GetUserCouponsResDTO, { type GetUserCouponsResJson } from "~/models/dto/coupons/res_get_user_coupons";
import type AbsUseCase from "~/models/_abstruct/usecase";

import Id from "~/models/value_object/id";
import { CouponCategory, CouponDeadline, CouponDiscount, CouponGoods, CouponPhoto, CouponStore } from "~/models/value_object/coupon";
import CreateDate from "~/models/value_object/create_date";

export default class GetUserCouponsUsecase implements AbsUseCase<GetUserCouponsReqDTO, GetUserCouponsResDTO[]|null> {
    request: GetUserCouponsReqDTO;

    constructor(request: GetUserCouponsReqDTO) {
        this.request = request;
    }

    async execute() {
        const response = await callApi(
            'GET',
            `/api/coupons/${this.request.user_id.value}`,
        ) as GetUserCouponsResJson[] | null;

        return response ? response.map((coupon) => new GetUserCouponsResDTO(
            new Id(coupon.id),
            new Id(coupon.user_id),
            new CouponGoods(coupon.goods),
            new CouponDiscount(coupon.discount),
            new CouponStore(coupon.store),
            new CouponDeadline(coupon.deadline),
            new CouponPhoto(coupon.photo_front),
            new CouponPhoto(coupon.photo_back),
            coupon.is_used,
            new CouponCategory(coupon.category),
            new CreateDate(coupon.create_date),
        )) : null;
    }
}