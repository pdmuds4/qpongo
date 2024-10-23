import type AbsUseCase from "~/models/_abstruct/usecase";
import { UserLoginReqDTO, UserLoginResDTO, type UserLoginResJson } from "~/models/dto/login";
import Id from "~/models/value_object/id";

import UseCaseError from "~/models/usecase/usecase_error";

export default class UserLoginUseCase implements AbsUseCase<UserLoginReqDTO, UserLoginResDTO> {
    request: UserLoginReqDTO;

    constructor(request: UserLoginReqDTO) {
        this.request = request;
    }

    async execute() {
        const response = await callApi(
            'POST',
            '/api/user/login',
            this.request.toJson()
        ) as UserLoginResJson | null;

        if (!response) throw new UseCaseError('ユーザが見つかりませんでした');

        return new UserLoginResDTO(
            new Id(response.user_id),
        );
    }
}