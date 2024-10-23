const {PasswordValueObject, EmailValueObject} = require('../../../domain/value_object/user');

const crypto = require('crypto');

class UserLoginUseCase {
    constructor(repository, request) {
        this.repository = repository;
        this.request = request;
    }

    async execute() {
        const e_mail = new EmailValueObject(this.request.e_mail);
        const hash_password = crypto.createHash('sha256').update(this.request.password).digest('hex');
        const password = new PasswordValueObject(hash_password);

        const user_id = await this.repository.getUserId(password, e_mail);
        if (user_id) {
            return {"user_id": user_id.value};
        } else {
            return {"user_id": user_id};
        }
    }
}

module.exports = UserLoginUseCase;