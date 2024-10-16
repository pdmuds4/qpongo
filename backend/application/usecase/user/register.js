const UserEntity = require('../../../domain/entity/user');

const {IDValueObject, CreateDateValueObject} = require('../../../domain/value_object/_base');
const {NameValueObject, PasswordValueObject, EmailValueObject, AgeValueObject, GenderValueObject} = require('../../../domain/value_object/user');

class UserRegisterUseCase {
    constructor(repository, request) {
        this.repository = repository;
        this.request = request;
    }

    async execute() {
        // ユーザIDを生成するサービスはユースケースクラスの外で行う
        const user = new UserEntity(
            new IDValueObject(this.request.id),
            new NameValueObject(this.request.name),
            new PasswordValueObject(this.request.password),
            new EmailValueObject(this.request.e_mail),
            new GenderValueObject(this.request.gender),
            new AgeValueObject(this.request.age),
            new CreateDateValueObject(new Date())
        );

        const response = await this.repository.addUserData(user);
        return response.id;
    }
}

module.exports = UserRegisterUseCase;