import { SavePhotosReqDTO, SavePhotosResDTO } from "~/models/dto/coupon_camera";
import type AbsUsecase from "~/models/_abstruct/usecase";

import UploadToS3Service from "~/models/service/uploadToS3";
import { CouponPhoto } from "~/models/value_object/coupon"

export default class SavePhotosUseCase implements AbsUsecase<SavePhotosReqDTO, SavePhotosResDTO> {
    request: SavePhotosReqDTO;
    service: UploadToS3Service;

    constructor(service: UploadToS3Service, request: SavePhotosReqDTO) {
        this.service = service;
        this.request = request;
    }

    async execute() {
        const service_req = this.request.toJson();

        const response_front_photo = await this.service.execute(service_req.photo_front_buffer);
        const response_back_photo  = service_req.photo_back_buffer ? await this.service.execute(service_req.photo_back_buffer) : null;

        return new SavePhotosResDTO(
            new CouponPhoto(response_front_photo), 
            response_back_photo ? new CouponPhoto(response_back_photo) : null
        );
    }
}