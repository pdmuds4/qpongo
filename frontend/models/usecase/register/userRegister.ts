import type AbsUseCase from "~/models/_abstruct/usecase";
import type UserRegisterReqDTO from "~/models/dto/register/req_user_register";
import UserRegisterResDTO, { type UserRegisterResJson } from "~/models/dto/register/res_user_register";
import Id from "~/models/value_object/id";

export default class UserRegisterUseCase implements AbsUseCase<UserRegisterReqDTO, UserRegisterResDTO> {
    request: UserRegisterReqDTO;

    constructor(request: UserRegisterReqDTO) {
        this.request = request;
    }

    async execute() {
        const response = await callApi(
            'POST',
            '/api/user',
            this.request.toJson()
        ) as UserRegisterResJson

        return new UserRegisterResDTO(
            new Id(response.user_id),
        )
    }
}