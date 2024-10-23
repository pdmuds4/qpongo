const {IDValueObject} = require('../../../domain/value_object/_base');

class SettingGetUserUseCase {
    constructor(repository, request) {
        this.repository = repository;
        this.request = request;
    }

    async execute() {
        const user_id = new IDValueObject(this.request.user_id);
        const response = await this.repository.getSettingData(user_id);
        return response;
    }
}

module.exports = SettingGetUserUseCase;