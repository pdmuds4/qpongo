class UpdateInquiryUseCase {
    constructor(repository, inquiry) {
        this.repository = repository;
        this.inquiry = inquiry;
    }

    async execute() {
        const inquiry_data = await this.repository.updateInquiryData(this.inquiry);
        return inquiry_data;
    }
}

module.exports = UpdateInquiryUseCase;