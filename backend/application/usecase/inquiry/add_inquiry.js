class AddInquiryUseCase {
    constructor(repository, inquiry) {
        this.repository = repository;
        this.inquiry = inquiry;
    }

    async execute() {
        const inquiry_data = await this.repository.addInquiryData(this.inquiry);
        return inquiry_data;
    }
}

module.exports = AddInquiryUseCase;