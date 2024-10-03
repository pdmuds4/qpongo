import AbsValueObject from "~/models/_abstruct/value_object";
import ValueObjectError from "../error";

export default class UserEmail extends AbsValueObject<string> {
    validate(const_val: string) {
        const regex = /^[\w+\-.]+@[a-z\d\-.]+\.[a-z]+$/i;
        if (!regex.test(const_val)) throw new ValueObjectError('メールアドレスの形式が正しくありません');

        return const_val;
    }
}