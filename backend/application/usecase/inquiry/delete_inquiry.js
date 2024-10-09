class DeleteInquiryUseCase {
    constructor(repository, inquiry) {
        this.repository = repository;
        this.inquiry = inquiry;
    }

    async execute() {
        await this.repository.deleteInquiryData(this.inquiry);
    }
}

module.exports = DeleteInquiryUseCase;