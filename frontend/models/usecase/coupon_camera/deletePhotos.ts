import DeletePhotosReqDTO from "~/models/dto/coupon_camera/req_delete_photos";
import DeletePhotosResDTO from "~/models/dto/coupon_camera/res_delete_photos";
import type AbsUsecase from "~/models/_abstruct/usecase";

export default class DeletePhotosUseCase implements AbsUsecase<DeletePhotosReqDTO, DeletePhotosResDTO> {
    request: DeletePhotosReqDTO;

    constructor(request: DeletePhotosReqDTO) {
        this.request = request;
    }

    async execute() {
        return;
    }
}