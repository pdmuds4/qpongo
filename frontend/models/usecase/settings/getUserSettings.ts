import GetUserSettingsReqDTO from "~/models/dto/settings/req_get_user_settings";
import GetUserSettingsResDTO from "~/models/dto/settings/res_get_user_settings";
import type AbsUseCase from "~/models/_abstruct/usecase";

export default class GetUserSettingsUsecase implements AbsUseCase<GetUserSettingsReqDTO, GetUserSettingsResDTO> {
    request: GetUserSettingsReqDTO;

    constructor(request: GetUserSettingsReqDTO) {
        this.request = request;
    }

    async execute() {
        return;
    }
}