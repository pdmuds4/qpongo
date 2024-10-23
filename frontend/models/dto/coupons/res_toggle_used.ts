import AbsDTO from "~/models/_abstruct/dto";
import type Message from "~/models/value_object/message";

export type ToggleUsedResJson = {
    message: string;
}

export default class ToggleUsedResDTO extends AbsDTO<ToggleUsedResJson> {
    message: Message;

    constructor(message: Message) {
        super();
        this.message = message;
    }

    toJson(): ToggleUsedResJson {
        return {
            message: this.message.value
        }
    }
}