import ToggleUsedReqDTO from "~/models/dto/coupons/req_toggle_used";
import ToggleUsedResDTO from "~/models/dto/coupons/res_toggle_used";
import type AbsUseCase from "~/models/_abstruct/usecase";

import Message from "~/models/value_object/message";

export default class ToggleUsedUsecase implements AbsUseCase<ToggleUsedReqDTO, ToggleUsedResDTO> {
    request: ToggleUsedReqDTO;

    constructor(request: ToggleUsedReqDTO) {
        this.request = request;
    }

    async execute() {
        const response = await callApi(
            'PUT',
            '/api/coupons',
            this.request.toJson()
        )

        return new ToggleUsedResDTO(
            new Message(response.message)
        );;
    }
}