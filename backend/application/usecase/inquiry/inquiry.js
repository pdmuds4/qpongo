const InQuiryEntity = require('../../../domain/entity/inquiry');

const {IDValueObject, CreateDateValueObject} = require('../../../domain/value_object/_base');
const {SenderValueObject, IsSupportValueObject, EmailValueObject, ContentValueObject} = require('../../../domain/value_object/inquiry');

class InquiryUseCase {
    constructor(repository, request) {
        this.repository = repository;
        this.request = request;
    }

    async execute() {
        const inquiry = new InQuiryEntity(
            new IDValueObject(this.request.id),
            new SenderValueObject(this.request.sender),
            new IsSupportValueObject(this.request.is_support),
            new EmailValueObject(this.request.e_mail),
            new ContentValueObject(this.request.content),
            new CreateDateValueObject(new Date())
        );

        await this.repository.addInquiryData(inquiry);
        const return_json = {'message': 'メッセージを送信しました。'};
        return return_json;
    }
}

module.exports = InquiryUseCase;