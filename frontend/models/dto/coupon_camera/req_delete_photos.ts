import AbsDTO from "~/models/_abstruct/dto";
import type CouponPhoto from "~/models/value_object/coupon/photo";

export type DeletePhotosReqJson = {
    photo_front: string;
    photo_back: string;
}

export default class DeletePhotosReqDTO extends AbsDTO<DeletePhotosReqJson> {
    photo_front: CouponPhoto;
    photo_back: CouponPhoto;

    constructor(
        photo_front: CouponPhoto,
        photo_back: CouponPhoto
    ) {
        super();
        this.photo_front = photo_front;
        this.photo_back = photo_back;
    }

    toJson(): DeletePhotosReqJson {
        return {
            photo_front: this.photo_front.value,
            photo_back: this.photo_back.value
        }
    }
}