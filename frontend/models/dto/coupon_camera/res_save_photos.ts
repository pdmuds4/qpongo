import AbsDTO from "~/models/_abstruct/dto";
import type CouponPhoto from "~/models/value_object/coupon/photo";

export type SavePhotosResJson = {
    photo_front: string;
    photo_back: string;
}

export default class SavePhotosResDTO extends AbsDTO<SavePhotosResJson> {
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

    toJson(): SavePhotosResJson {
        return {
            photo_front: this.photo_front.value,
            photo_back: this.photo_back.value
        }
    }
}