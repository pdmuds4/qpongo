import SavePhotosReqDTO from "~/models/dto/coupon_camera/req_save_photos";
import SavePhotosResDTO from "~/models/dto/coupon_camera/res_save_photos";
import type AbsUsecase from "~/models/_abstruct/usecase";

export default class SavePhotosUseCase implements AbsUsecase<SavePhotosReqDTO, SavePhotosResDTO> {
    request: SavePhotosReqDTO;

    constructor(request: SavePhotosReqDTO) {
        this.request = request;
    }

    async execute() {
        return;
    }
}