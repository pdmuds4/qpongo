import AbsDTO from "~/models/_abstruct/dto";
import type Message from "~/models/value_object/message";

export type CouponRegisterResJson = {
    message: string;
}

export default class CouponRegisterResDTO extends AbsDTO<CouponRegisterResJson> {
    message: Message;

    constructor(
        message: Message
    ) {
        super();
        this.message = message;
    }
    
    toJson(): CouponRegisterResJson {
        return {
            message: this.message.value
        }
    }
}