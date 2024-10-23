import AbsDTO from "~/models/_abstruct/dto";
import type Message from "~/models/value_object/message";

export type InquiryResJson = {
    message: string;
}

export default class InquiryResDTO extends AbsDTO<InquiryResJson> {
    message: Message;

    constructor(message: Message) {
        super();
        this.message = message;
    }

    toJson(): InquiryResJson {
        return {
            message: this.message.value
        }
    }
}