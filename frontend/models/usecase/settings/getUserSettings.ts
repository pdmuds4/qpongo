import { GetUserSettingsReqDTO, GetUserSettingsResDTO, type GetUserSettingsResJson } from "~/models/dto/settings";
import type AbsUseCase from "~/models/_abstruct/usecase";

import Id from "~/models/value_object/id";
import { SettingNotice } from "~/models/value_object/setting";

export default class GetUserSettingsUsecase implements AbsUseCase<GetUserSettingsReqDTO, GetUserSettingsResDTO> {
    request: GetUserSettingsReqDTO;

    constructor(request: GetUserSettingsReqDTO) {
        this.request = request;
    }

    async execute() {
        const response = await callApi(
            'GET',
            `/api/settings/${this.request.user_id.value}`,
        ) as GetUserSettingsResJson;

        return new GetUserSettingsResDTO(
            new Id(response.user_id),
            new SettingNotice(response.notice),
        )
    }
}