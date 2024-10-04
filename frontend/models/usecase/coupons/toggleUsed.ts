import ToggleUsedReqDTO from "~/models/dto/coupons/req_toggle_used";
import ToggleUsedResDTO from "~/models/dto/coupons/res_toggle_used";
import type AbsUseCase from "~/models/_abstruct/usecase";

export default class ToggleUsedUsecase implements AbsUseCase<ToggleUsedReqDTO, ToggleUsedResDTO> {
    request: ToggleUsedReqDTO;

    constructor(request: ToggleUsedReqDTO) {
        this.request = request;
    }

    async execute() {
        return;
    }
}