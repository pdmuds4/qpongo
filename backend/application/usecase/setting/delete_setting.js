class DeleteSettingUseCase {
    constructor(repository, setting) {
        this.repository = repository;
        this.setting = setting;
    }

    async execute() {
        const setting_data = await this.repository.deleteSettingData(this.setting);
    }
}

module.exports = DeleteSettingUseCase;