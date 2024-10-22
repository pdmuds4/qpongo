import { DeletePhotosReqDTO, DeletePhotosResDTO, type DeletePhotosResJson } from "~/models/dto/coupon_camera";
import type AbsUsecase from "~/models/_abstruct/usecase";

import Message from "~/models/value_object/message";

export default class DeletePhotosUseCase implements AbsUsecase<DeletePhotosReqDTO, DeletePhotosResDTO> {
    request: DeletePhotosReqDTO;

    constructor(request: DeletePhotosReqDTO) {
        this.request = request;
    }

    async execute() {
        const response = await callApi(
            'DELETE',
            '/api/photos',
            this.request.toJson()
        ) as DeletePhotosResJson;

        return new DeletePhotosResDTO(
            new Message(response.message)
        );
    }
}