const SettingEntity = require('../../../domain/entity/setting');

const {IDValueObject} = require('../../../domain/value_object/_base');
const {NoticeValueObject} = require('../../../domain/value_object/setting');

class SettingUpdateSettingsUseCase {
    constructor(repository, request) {
        this.repository = repository;
        this.request = request;
    }

    async execute() {
        const setting = new SettingEntity(
            new IDValueObject(this.request.user_id),
            new NoticeValueObject(this.request.notice)
        );

        await this.repository.updateSettingData(setting);
        const return_json = {'message': 'データを修正しました。'}
        return return_json;
    }
}

module.exports = SettingUpdateSettingsUseCase;