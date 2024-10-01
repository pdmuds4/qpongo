const {PutCommand} = require('@aws-sdk/lib-dynamodb');
const {GetCommand} = require('@aws-sdk/lib-dynamodb');
const {UpdateCommand} = require('@aws-sdk/lib-dynamodb');
const {DeleteCommand} = require('@aws-sdk/lib-dynamodb');
const {IDValueObject, RegistrationDateValueObject} = require('../../domain/value_object/_base');
const {TitleValueObject, ContentValueObject, IsSupportValueObject} = require('../../domain/value_object/inquiry');
const InquiryEntity = require('../../domain/entity/inquiry');

class InquiryRepository {
    constructor(dynamoDBDocumentClient) {
        this.dynamoDB = dynamoDBDocumentClient;
    }

    async addInquiry(inquiry) {
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
                new IDValueObject(data.Item.user_id),
                new TitleValueObject(data.Item.title),
                new ContentValueObject(data.Item.content),
                new IsSupportValueObject(data.Item.is_support),
                new RegistrationDateValueObject(new Date(data.Item.sending_date))
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
            UpdateExpression: 'set #title = :title, #content = :content, #is_support = :is_support, #sending_date = :sending_date',
            ExpressionAttributeNames: {
                '#title': 'title',
                '#content': 'content',
                '#is_support': 'is_support',
                '#sending_date': 'sending_date'
            },
            ExpressionAttributeValues: {
                ':title': inquiry.title.value,
                ':content': inquiry.content.value,
                ':is_support': inquiry.is_support.value,
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