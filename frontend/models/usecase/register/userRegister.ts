import type AbsUseCase from "~/models/_abstruct/usecase";
import type UserRegisterReqDTO from "~/models/dto/register/req_user_register";
import type UserRegisterResDTO from "~/models/dto/register/res_user_register";

export default class UserRegisterUseCase implements AbsUseCase<UserRegisterReqDTO, UserRegisterResDTO> {
    request: UserRegisterReqDTO;

    constructor(request: UserRegisterReqDTO) {
        this.request = request;
    }

    async execute() {
        return;
    }
}