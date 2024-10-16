const {IDValueObject} = require('../../../domain/value_object/_base');

class UserGetInfoUseCase {
    constructor(repository, request) {
        this.repository = repository;
        this.request = request;
    }

    async execute() {
        const user_id = new IDValueObject(this.request.user_id);
        const response = await this.repository.getUserData(user_id.value);
        return response;
    }
}

module.exports = UserGetInfoUseCase;