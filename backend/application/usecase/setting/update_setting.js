class UpdateSettingUseCase {
    constructor(repository, setting) {
        this.repository = repository;
        this.setting = setting;
    }

    async execute() {
        const setting_data = await this.repository.updateSettingData(this.setting);
        return setting_data;
    }
}

module.exports = UpdateSettingUseCase;