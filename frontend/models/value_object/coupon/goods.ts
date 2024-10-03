import AbsValueObject from "~/models/_abstruct/value_object";
import ValueObjectError from "../error";

export default class CouponGoods extends AbsValueObject<string> {
    validate(const_val: string) {
        if (const_val.length <= 0) throw new ValueObjectError('商品名が入力されていません');

        return const_val;
    }
}