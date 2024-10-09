import AbsValueObject from "~/models/_abstruct/value_object";
import ValueObjectError from "~/models/value_object/value_object_error";

export default class UserAge extends AbsValueObject<number> {
    validate(const_val: number) {
        if (const_val < 0) throw new ValueObjectError('年齢は0以上である必要があります');
        if (const_val > 999) throw new ValueObjectError('年齢は3桁以下である必要があります');

        return const_val;
    }
}