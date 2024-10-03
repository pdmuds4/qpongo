import AbsValueObject from "~/models/_abstruct/value_object";
import ValueObjectError from "./error";

export default class Id extends AbsValueObject<number> {
    validate(const_val: number): number {
        if (const_val <= 0) throw new ValueObjectError('IDは0以下ではいけません');
        
        return const_val;
    }
}