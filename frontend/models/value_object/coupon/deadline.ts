import AbsValueObject from "~/models/_abstruct/value_object";
import ValueObjectError from "~/models/value_object/value_object_error";

export default class CouponDeadLine extends AbsValueObject<Date> {
    validate(const_val: Date) {
        if (new Date() > const_val) throw new ValueObjectError('過去の日付は指定できません');

        return const_val;
    }
}