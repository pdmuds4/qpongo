import type AbsUseCase from "~/models/_abstruct/usecase";
import type UserLoginReqDTO from "~/models/dto/login/req_user_login";
import type UserLoginResDTO from "~/models/dto/login/res_user_login";

export default class UserLoginUseCase implements AbsUseCase<UserLoginReqDTO, UserLoginResDTO> {
    request: UserLoginReqDTO;

    constructor(request: UserLoginReqDTO) {
        this.request = request;
    }

    async execute() {
        return;
    }
}