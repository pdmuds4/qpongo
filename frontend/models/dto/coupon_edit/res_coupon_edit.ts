import AbsDTO from "~/models/_abstruct/dto";
import type Message from "~/models/value_object/message";

export type CouponEditResJson = {
    message: string;
}

export default class CouponEditResDTO extends AbsDTO<CouponEditResJson> {
    message: Message;

    constructor(
        message: Message
    ) {
        super();
        this.message = message;
    }

    toJson(): CouponEditResJson {
        return {
            message: this.message.value
        }
    }
}