import GetUserInfoReqDTO from "~/models/dto/settings/req_get_user_info";
import GetUserInfoResDTO from "~/models/dto/settings/res_get_user_info";
import type AbsUseCase from "~/models/_abstruct/usecase";

export default class GetUserInfoUsecase implements AbsUseCase<GetUserInfoReqDTO, GetUserInfoResDTO> {
    request: GetUserInfoReqDTO;

    constructor(request: GetUserInfoReqDTO) {
        this.request = request;
    }

    async execute() {
        return;
    }
}