import AbsDTO from "~/models/_abstruct/dto";
import type Message from "~/models/value_object/message";

export type DeletePhotosResJson = {
    message: string;
}

export default class DeletePhotosResDTO extends AbsDTO<DeletePhotosResJson> {
    message: Message;

    constructor(
        message: Message
    ) {
        super();
        this.message = message;
    }

    toJson(): DeletePhotosResJson {
        return {
            message: this.message.value
        }
    }
}