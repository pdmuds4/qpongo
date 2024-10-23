import GetUserInfoReqDTO from "~/models/dto/settings/req_get_user_info";
import GetUserInfoResDTO, { type GetUserInfoResJson } from "~/models/dto/settings/res_get_user_info";
import type AbsUseCase from "~/models/_abstruct/usecase";

import Id from "~/models/value_object/id";
import { UserAge, UserEmail, UserGender, UserName } from "~/models/value_object/user";
import CreateDate from "~/models/value_object/create_date";

export default class GetUserInfoUsecase implements AbsUseCase<GetUserInfoReqDTO, GetUserInfoResDTO> {
    request: GetUserInfoReqDTO;

    constructor(request: GetUserInfoReqDTO) {
        this.request = request;
    }

    async execute() {
        const response = await callApi(
            'GET',
            `/api/user/${this.request.toJson().user_id}`
        ) as GetUserInfoResJson;

        return new GetUserInfoResDTO(
            new Id(response.id),
            new UserName(response.name),
            new UserEmail(response.e_mail),
            new UserGender(response.gender),
            new UserAge(response.age),
            new CreateDate(response.create_date)
        );
    }
}