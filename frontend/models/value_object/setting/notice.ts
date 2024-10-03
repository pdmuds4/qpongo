import AbsValueObject from "~/models/_abstruct/value_object";
import ValueObjectError from "../error";

export default class UserName extends AbsValueObject<string> {
    validate(const_val: string) {
        if (const_val.length < 1)  throw new ValueObjectError('ユーザ名は1文字以上である必要があります');
        if (const_val.length > 14) throw new ValueObjectError('ユーザ名は14文字以下である必要があります');

        return const_val;
    }
}