import AbsDTO from "~/models/_abstruct/dto";
import type Message from "~/models/value_object/message";

export type RetakePhotoResJson = {
    message: string;
}

export default class RetakePhotoResDTO extends AbsDTO<RetakePhotoResJson> {
    message: Message;

    constructor(
        message: Message
    ) {
        super();
        this.message = message;
    }
    
    toJson(): RetakePhotoResJson {
        return {
            message: this.message.value
        }
    }
}