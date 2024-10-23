import type { SavePhotosReqJson } from "~/models/dto/coupon_camera";

export default function () {
    return useState<SavePhotosReqJson>('coupon-photo-buffer', ()=>({} as SavePhotosReqJson));
}