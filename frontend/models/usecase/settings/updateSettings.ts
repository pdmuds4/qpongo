import UpdateSettingsReqDTO from "~/models/dto/settings/req_update_settings";
import UpdateSettingsResDTO from "~/models/dto/settings/res_update_settings";
import type AbsUseCase from "~/models/_abstruct/usecase";

export default class UpdateSettingsUsecase implements AbsUseCase<UpdateSettingsReqDTO, UpdateSettingsResDTO> {
    request: UpdateSettingsReqDTO;

    constructor(request: UpdateSettingsReqDTO) {
        this.request = request;
    }

    async execute() {
        return;
    }
}