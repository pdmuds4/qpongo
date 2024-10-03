import AbsValueObject from "~/models/_abstruct/value_object";
import ValueObjectError from "../error";

export default class CouponPhoto extends AbsValueObject<string> {
    validate(const_val: string) {
        const regex = /^(https?:\/\/)?([a-z\d-]+\.)+[a-z]{2,6}(\/[\w\d#?&%=.-]*)*\/?$/i;
        if (!regex.test(const_val)) throw new ValueObjectError('URLの形式が無効です');

        return const_val;
    }
}