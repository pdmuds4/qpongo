import AbsValueObject from "~/models/_abstruct/value_object";
import ValueObjectError from "~/models/value_object/value_object_error";

export default class SettingNotice extends AbsValueObject<number> {
    validate(const_val: number) {
        if (const_val < 1)  throw new ValueObjectError('通知設定は1以上である必要があります');
        if (const_val > 14) throw new ValueObjectError('通知設定は14以下である必要があります');

        return const_val;
    }
}