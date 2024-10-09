import AbsDTO from "~/models/_abstruct/dto";
import type Message from "~/models/value_object/message";

export type DeleteCouponResJson = {
    message: string;
}

export default class DeleteCouponResDTO extends AbsDTO<DeleteCouponResJson> {
    message: Message;

    constructor(message: Message) {
        super();
        this.message = message;
    }

    toJson(): DeleteCouponResJson {
        return {
            message: this.message.value
        }
    }
}