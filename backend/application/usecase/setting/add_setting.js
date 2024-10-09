class AddSettingUseCase {
    constructor(repository, setting) {
        this.repository = repository;
        this.setting = setting;
    }

    async execute() {
        const setting_data = await this.repository.addSettingData(this.setting);
        return setting_data;
    }
}

module.exports = AddSettingUseCase;