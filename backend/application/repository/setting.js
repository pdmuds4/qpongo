const {PutCommand} = require('@aws-sdk/lib-dynamodb');
const {GetCommand} = require('@aws-sdk/lib-dynamodb');
const {UpdateCommand} = require('@aws-sdk/lib-dynamodb');
const {DeleteCommand} = require('@aws-sdk/lib-dynamodb');
const {IDValueObject} = require('../../domain/value_object/_base');
const {NoticeValueObject} = require('../../domain/value_object/setting');
const SettingEntity = require('../../domain/entity/setting');

class SettingRepository {
    constructor(dynamoDBDocumentClient) {
        this.dynamoDB = dynamoDBDocumentClient;
    }

    async addSettingData(setting) {
        const params = {
            TableName: 'setting',
            Item: { ...setting.toJson()}
        };

        try {
            const command = new PutCommand(params);
            await this.dynamoDB.send(command);
            return setting;
        } catch (error) {
            throw new Error(error);
        }
    }

    async getSettingData(id) {
        const params = {
            TableName: 'setting',
            Key: {
                user_id: id.value
            }
        };

        try {
            const command = new GetCommand(params);
            const data = await this.dynamoDB.send(command);
            return new SettingEntity(
                new IDValueObject(data.Item.user_id),
                new NoticeValueObject(data.Item.notice)
            );
        } catch (error) {
            throw new Error(error);
        }
    }

    async updateSettingData(setting) {
        const params = {
            TableName: 'setting',
            Key: {
                user_id: setting.user_id.value
            },
            UpdateExpression: 'set #notice = :notice',
            ExpressionAttributeNames: {
                '#notice': 'notice'
            },
            ExpressionAttributeValues: {
                ':notice': setting.notice.value
            }
        };

        try {
            const command = new UpdateCommand(params);
            await this.dynamoDB.send(command);
            return setting;
        } catch (error) {
            throw new Error(error);
        }
    }

    async deleteSettingData(setting) {
        const params = {
            TableName: 'setting',
            Key: {
                user_id: setting.user_id.value
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

module.exports = SettingRepository;