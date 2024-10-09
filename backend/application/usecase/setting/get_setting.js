class GetSettingUseCase {
    constructor(repository, id) {
        this.repository = repository;
        this.id = id;
    }

    async execute() {
        const setting_data = await this.repository.getSettingData(this.id);
        return setting_data;
    }
}

module.exports = GetSettingUseCase;