import AbsDTO from "~/models/_abstruct/dto";
import type Id from "~/models/value_object/id";
import type UserName from "~/models/value_object/user/name";
import type UserPassword from "~/models/value_object/user/password";
import type UserEmail from "~/models/value_object/user/e_mail";
import type UserGender from "~/models/value_object/user/gender";
import type UserAge from "~/models/value_object/user/age";
import type CreateDate from "~/models/value_object/create_date";

export type GetUserInfoResJson = {
    id: number;
    name: string;
    password: string;
    e_mail: string;
    gender: string;
    age: number;
    create_date: Date;
}

export default class GetUserInfoResDTO extends AbsDTO<GetUserInfoResJson> {
    id: Id;
    name: UserName;
    password: UserPassword;
    e_mail: UserEmail;
    gender: UserGender;
    age: UserAge;
    create_date: CreateDate;

    constructor(
        id: Id,
        name: UserName,
        password: UserPassword,
        e_mail: UserEmail,
        gender: UserGender,
        age: UserAge,
        create_date: CreateDate
    ) {
        super();
        this.id = id;
        this.name = name;
        this.password = password;
        this.e_mail = e_mail;
        this.gender = gender;
        this.age = age;
        this.create_date = create_date;
    }
    
    toJson(): GetUserInfoResJson {
        return {
            id: this.id.value,
            name: this.name.value,
            password: this.password.value,
            e_mail: this.e_mail.value,
            gender: this.gender.value,
            age: this.age.value,
            create_date: this.create_date.value
        }
    }
}