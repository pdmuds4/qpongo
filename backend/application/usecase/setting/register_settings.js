const SettingEntity = require('../../../domain/entity/setting');

const {IDValueObject} = require('../../../domain/value_object/_base');
const {NoticeValueObject} = require('../../../domain/value_object/setting');

class SettingsRegisterUseCase {
    constructor(repository, settings) {
        this.repository = repository;
        this.settings = settings;
    }

    async execute() {
        const setting = new SettingEntity(
            new IDValueObject(this.settings.user_id),
            new NoticeValueObject(this.settings.notice)
        );
        
        const response = await this.repository.addSettingData(setting);
        return response.id;
    }
}

module.exports = SettingsRegisterUseCase;