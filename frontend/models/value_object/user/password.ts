import AbsValueObject from "~/models/_abstruct/value_object";
import ValueObjectError from "../error";

export default class UserPassword extends AbsValueObject<string> {
    validate(const_val: string) {
        if (const_val.length < 8)                 throw new ValueObjectError('パスワードは8文字以上である必要があります');
        if (const_val.length > 16)                throw new ValueObjectError('パスワードは16文字以下である必要があります');
        if (!/^[a-zA-Z0-9-_.]+$/.test(const_val)) throw new ValueObjectError('パスワードは半角英数字と -_. 以外は使用できません');

        return const_val;
    }
}