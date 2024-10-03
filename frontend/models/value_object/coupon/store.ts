import AbsValueObject from "~/models/_abstruct/value_object";
import ValueObjectError from "~/models/value_object/value_object_error";

export default class CouponPhoto extends AbsValueObject<string> {
    validate(const_val: string) {
        if (const_val.length <= 0) throw new ValueObjectError('店舗名が入力されていません');

        return const_val;
    }
}