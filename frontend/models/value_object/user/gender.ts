import AbsValueObject from "~/models/_abstruct/value_object";
import type { userGenderEnums } from "../enums";

export default class UserGender extends AbsValueObject<userGenderEnums> {
    validate(const_val: userGenderEnums) {
        return const_val;
    }
}