class GetInquiryUseCase {
    constructor(repository, id) {
        this.repository = repository;
        this.id = id;
    }

    async execute() {
        const inquiry_data = await this.repository.getInquiryData(this.id);
        return inquiry_data;
    }
}

module.exports = GetInquiryUseCase;