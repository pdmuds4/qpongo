import AbsDTO from "~/models/_abstruct/dto";
import type InquiryContent from "~/models/value_object/inquiry/content";
import type InquiryEmail from "~/models/value_object/inquiry/e_mail";
import type InquirySender from "~/models/value_object/inquiry/sender";

export type InquiryReqJson = {
    sender: string;
    e_mail: string;
    content: string;
}

export default class InquiryReqDTO extends AbsDTO<InquiryReqJson> {
    sender: InquirySender;
    e_mail: InquiryEmail;
    content: InquiryContent;

    constructor(sender: InquirySender, e_mail: InquiryEmail, content: InquiryContent) {
        super();
        this.sender = sender;
        this.e_mail = e_mail;
        this.content = content;
    }

    toJson(): InquiryReqJson {
        return {
            sender: this.sender.value,
            e_mail: this.e_mail.value,
            content: this.content.value
        }
    }
}