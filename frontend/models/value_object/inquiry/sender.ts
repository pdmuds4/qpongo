import AbsValueObject from "~/models/_abstruct/value_object";
import ValueObjectError from "~/models/value_object/value_object_error";

export default class InquirySender extends AbsValueObject<string> {
    validate(const_val: string) {
        if (const_val.length < 1) throw new ValueObjectError('ユーザ名は1文字以上である必要があります');
        if (const_val.length > 8) throw new ValueObjectError('ユーザ名は8文字以下である必要があります');

        return const_val;
    }
}