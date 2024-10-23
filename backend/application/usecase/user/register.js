const UserEntity = require('../../../domain/entity/user');

const {IDValueObject, CreateDateValueObject} = require('../../../domain/value_object/_base');
const {NameValueObject, PasswordValueObject, EmailValueObject, AgeValueObject, GenderValueObject} = require('../../../domain/value_object/user');

const crypto = require('crypto');

class UserRegisterUseCase {
    constructor(repository, request) {
        this.repository = repository;
        this.request = request;
    }

    async execute() {
        const hashed_password = crypto.createHash('sha256').update(this.request.password).digest('hex');
        const japan_time = new Date().toLocaleString("ja-JP", {timeZone: "Asia/Tokyo"});
        // ユーザIDを生成するサービスはユースケースクラスの外で行う
        const user = new UserEntity(
            new IDValueObject(this.request.id),
            new NameValueObject(this.request.name),
            new PasswordValueObject(hashed_password),
            new EmailValueObject(this.request.e_mail),
            new GenderValueObject(this.request.gender),
            new AgeValueObject(this.request.age),
            new CreateDateValueObject(new Date(japan_time))
        );

        const response = await this.repository.addUserData(user);
        const return_json = {'user_id': response.id.value}
        return return_json;
    }
}

module.exports = UserRegisterUseCase;