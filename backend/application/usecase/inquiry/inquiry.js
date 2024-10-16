const InQuiryEntity = require('../../../domain/entity/inquiry');

const {IDValueObject, CreateDateValueObject} = require('../../../domain/value_object/_base');
const {SenderValueObject, EmailValueObject, ContentValueObject} = require('../../../domain/value_object/inquiry');

class InquiryUseCase {
    constructor(repository, request) {
        this.repository = repository;
        this.request = request;
    }

    async execute() {
        const inquiry = new InQuiryEntity(
            new IDValueObject(this.request.id),
            new SenderValueObject(this.request.sender),
            new EmailValueObject(this.request.e_mail),
            new ContentValueObject(this.request.content),
            new CreateDateValueObject(new Date())
        );

        const response = await this.repository.addInquiryData(inquiry);
        return response.id;
    }
}

module.exports = InquiryUseCase;