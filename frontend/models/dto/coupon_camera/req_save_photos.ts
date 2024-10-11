import AbsDTO from "~/models/_abstruct/dto";

export type SavePhotosReqJson = {
    photo_front_buffer: Buffer;
    photo_back_buffer: Buffer;
}

export default class SavePhotosReqDTO extends AbsDTO<SavePhotosReqJson> {
    photo_front_buffer: Buffer;
    photo_back_buffer: Buffer;

    constructor(
        photo_front_buffer: Buffer,
        photo_back_buffer: Buffer
    ) {
        super();
        this.photo_front_buffer = photo_front_buffer;
        this.photo_back_buffer = photo_back_buffer;
    }

    toJson(): SavePhotosReqJson {
        return {
            photo_front_buffer: this.photo_front_buffer,
            photo_back_buffer: this.photo_back_buffer
        }
    }
}