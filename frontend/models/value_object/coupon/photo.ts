import AbsValueObject from "~/models/_abstruct/value_object";
import ValueObjectError from "~/models/value_object/value_object_error";

export default class CouponPhoto extends AbsValueObject<string> {
    validate(const_val: string) {
        if (!/^\/source.*\.png$/.test(const_val)) throw new ValueObjectError('URLの形式が無効です');

        return const_val;
    }
}