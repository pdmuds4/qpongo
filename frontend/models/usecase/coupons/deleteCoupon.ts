import { DeleteCouponReqDTO, DeleteCouponResDTO, type DeleteCouponResJson } from "~/models/dto/coupons";
import type AbsUsecase from "~/models/_abstruct/usecase";
import Message from "~/models/value_object/message";


export default class DeleteCouponUsecase implements AbsUsecase<DeleteCouponReqDTO, DeleteCouponResDTO> {
    request: DeleteCouponReqDTO;

    constructor(request: DeleteCouponReqDTO) {
        this.request = request;
    }

    async execute() {
        const response = await callApi(
            'DELETE',
            '/api/coupons',
            this.request.toJson()
        ) as DeleteCouponResJson;

        return new DeleteCouponResDTO(
            new Message(response.message)
        );
    }
}