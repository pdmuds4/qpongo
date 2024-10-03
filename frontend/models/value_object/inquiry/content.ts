import AbsValueObject from "~/models/_abstruct/value_object";
import ValueObjectError from "../error";

export default class InquiryContent extends AbsValueObject<string> {
    validate(const_val: string) {
        if (const_val.length <= 0) throw new ValueObjectError('お問い合わせ内容が入力されていません');

        return const_val;
    }
}