import { TextExtractReqDTO, TextExtractResDTO, type TextExtractResJson } from "~/models/dto/coupon_camera";
import type AbsUseCase from "~/models/_abstruct/usecase";
import { CouponDiscount, CouponGoods, CouponStore, CouponDeadline, CouponCategory } from "~/models/value_object/coupon";

export default class TextExtractUseCase implements AbsUseCase<TextExtractReqDTO, TextExtractResDTO> {
    request: TextExtractReqDTO;

    constructor(request: TextExtractReqDTO) {
        this.request = request;
    }

    async execute() {
        const response = await callApi(
            'POST',
            '/api/photos',
            this.request.toJson()
        ) as TextExtractResJson;

        return new TextExtractResDTO(
            new CouponGoods(response.goods),
            new CouponDiscount(response.discount),
            new CouponStore(response.store),
            new CouponDeadline(response.deadline),
            new CouponCategory(response.category)
        );
    }
}