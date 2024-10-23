import AbsDTO from "~/models/_abstruct/dto";
import type Message from "~/models/value_object/message";

export type UpdateSettingsResJson = {
    message: string;
}

export default class UpdateSettingsResDTO extends AbsDTO<UpdateSettingsResJson> {
    message: Message;

    constructor(message: Message) {
        super();
        this.message = message;
    }
    
    toJson(): UpdateSettingsResJson {
        return {
            message: this.message.value
        }
    }
}