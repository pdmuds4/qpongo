import { GetCouponReqDTO, GetCouponResDTO, type GetCouponResJson } from "~/models/dto/coupon";
import type AbsUseCase from "~/models/_abstruct/usecase";

import Id from "~/models/value_object/id";
import { CouponCategory, CouponDeadline, CouponDiscount, CouponGoods, CouponPhoto, CouponStore } from "~/models/value_object/coupon";
import CreateDate from "~/models/value_object/create_date";

export default class GetUserCouponsUsecase implements AbsUseCase<GetCouponReqDTO, GetCouponResDTO|null> {
    request: GetCouponReqDTO;

    constructor(request: GetCouponReqDTO) {
        this.request = request;
    }

    async execute() {
        const response = await callApi(
            'GET',
            `/api/coupons/coupon/${this.request.toJson().coupon_id}`
        ) as GetCouponResJson | null;

        if (response) {
            return new GetCouponResDTO(
                new Id(response.id),
                new Id(response.user_id),
                new CouponGoods(response.goods),
                new CouponDiscount(response.discount),
                new CouponStore(response.store),
                new CouponDeadline(new Date(response.deadline)),
                new CouponPhoto(response.photo_front),
                new CouponPhoto(response.photo_back),
                response.is_used,
                new CouponCategory(response.category),
                new CreateDate(response.create_date),
            );
        } else {
            return null;
        } 
    }
}