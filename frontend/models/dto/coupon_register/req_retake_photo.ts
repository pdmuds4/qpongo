import AbsDTO from "~/models/_abstruct/dto";
import type CouponPhoto from "~/models/value_object/coupon/photo";

export type RetakePhotoReqJson = {
    front_photo: string;
    back_photo: string;
}

export default class RetakePhotoReqDTO extends AbsDTO<RetakePhotoReqJson> {
    front_photo: CouponPhoto;
    back_photo: CouponPhoto;

    constructor(
        front_photo: CouponPhoto,
        back_photo: CouponPhoto
    ) {
        super();
        this.front_photo = front_photo;
        this.back_photo = back_photo;
    }
    
    
    toJson(): RetakePhotoReqJson {
        return {
            front_photo: this.front_photo.value,
            back_photo: this.back_photo.value
        }
    }
}