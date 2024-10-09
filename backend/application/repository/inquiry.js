const {PutCommand} = require('@aws-sdk/lib-dynamodb');
const {GetCommand} = require('@aws-sdk/lib-dynamodb');
const {UpdateCommand} = require('@aws-sdk/lib-dynamodb');
const {DeleteCommand} = require('@aws-sdk/lib-dynamodb');
const {IDValueObject, CreateDateValueObject} = require('../../domain/value_object/_base');
const {SenderValueObject, IsSupportValueObject, EmailValueObject, ContentValueObject} = require('../../domain/value_object/inquiry');
const InquiryEntity = require('../../domain/entity/inquiry');

class InquiryRepository {
    constructor(dynamoDBDocumentClient) {
        this.dynamoDB = dynamoDBDocumentClient;
    }

    async addInquiryData(inquiry) {
        const params = {
            TableName: 'inquiry',
            Item: { ...inquiry.toJson(), sending_date: inquiry.sending_date.value.toISOString() }
        };

        try {
            const command = new PutCommand(params);
            await this.dynamoDB.send(command);
            return inquiry;
        } catch (error) {
            throw new Error(error);
        }
    }

    async getInquiryData(id) {
        const params = {
            TableName: 'inquiry',
            Key: {
                id: id.value
            }
        };

        try {
            const command = new GetCommand(params);
            const data = await this.dynamoDB.send(command);
            return new InquiryEntity(
                new IDValueObject(data.Item.id),
                new SenderValueObject(data.Item.name),
                new IsSupportValueObject(data.Item.is_support),
                new EmailValueObject(data.Item.e_mail),
                new ContentValueObject(data.Item.content),
                new CreateDateValueObject(new Date(data.Item.sending_date))
            );
        } catch (error) {
            throw new Error(error);
        }
    }

    async updateInquiryData(inquiry) {
        const params = {
            TableName: 'inquiry',
            Key: {
                id: inquiry.id.value
            },
            UpdateExpression: 'set #name = :name, #is_support = :is_support, #e_mail = :e_mail, #content = :content, #sending_date = :sending_date',
            ExpressionAttributeNames: {
                '#name': 'name',
                '#is_support': 'is_support',
                '#e_mail': 'e_mail',
                '#content': 'content',
                '#sending_date': 'sending_date'
            },
            ExpressionAttributeValues: {
                ':name': inquiry.name.value,
                ':is_support': inquiry.is_support.value,
                ':e_mail': inquiry.e_mail.value,
                ':content': inquiry.content.value,
                ':sending_date': inquiry.sending_date.value.toISOString()
            }
        };

        try {
            const command = new UpdateCommand(params);
            await this.dynamoDB.send(command);
            return inquiry;
        } catch (error) {
            throw new Error(error);
        }
    }

    async deleteInquiryData(inquiry) {
        const params = {
            TableName: 'inquiry',
            Key: {
                id: inquiry.id.value
            }
        };

        try {
            const command = new DeleteCommand(params);
            await this.dynamoDB.send(command);
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = InquiryRepository;