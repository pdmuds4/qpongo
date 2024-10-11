import AbsValueObject from "~/models/_abstruct/value_object";
import ValueObjectError from "./value_object_error";

export default class Message extends AbsValueObject<string> {
    validate(const_val: string) {
        if (const_val.length == 0) throw new ValueObjectError('メッセージが空です');
        
        return const_val;
    }
}