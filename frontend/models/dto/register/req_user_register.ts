import AbsDTO from "~/models/_abstruct/dto";
import type UserEmail from "~/models/value_object/user/e_mail";
import type UserPassword from "~/models/value_object/user/password";

export type UserRegisterReqJson = {
    e_mail: string;
    password: string;
}

export default class UserRegisterReqDTO extends AbsDTO<UserRegisterReqJson> {
    e_mail: UserEmail;
    password: UserPassword;

    constructor(
        e_mail: UserEmail,
        password: UserPassword
    ) {
        super();
        this.e_mail = e_mail;
        this.password = password;
    }

    toJson(): UserRegisterReqJson {
        return {
            e_mail: this.e_mail.value,
            password: this.password.value
        }
    }
}