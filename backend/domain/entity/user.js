class UserEntity {
    constructor(id, name, password, e_mail, gender, age, create_date) {
        this._id = id;
        this.name = name;
        this.password = password;
        this.e_mail = e_mail;
        this.gender = gender;
        this.age = age;
        this.create_date = create_date;

        if (!(this._id && this.name && this.password && this.e_mail && this.gender && this.age && this.create_date)) {
            throw new Error('ユーザーエンティティの生成に失敗しました');
        }
    }

    get id() {
        return this._id;
    }

    toJson() {
        return {
            id: this._id,
            name: this.name,
            password: this.password,
            e_mail: this.e_mail,
            gender: this.gender,
            age: this.age,
            create_date: this.create_date
        };
    }
}

module.exports = UserEntity;