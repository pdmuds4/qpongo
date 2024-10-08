import AbsValueObject from "~/models/_abstruct/value_object";
import ValueObjectError from "./value_object_error";

export default class CreateDate extends AbsValueObject<Date> {
    validate(const_val: Date) {
        if (const_val >= new Date()) throw new ValueObjectError('作成日は過去の日付である必要があります');
        
        return const_val;
    }
}