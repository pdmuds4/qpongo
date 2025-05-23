const {PutCommand} = require('@aws-sdk/lib-dynamodb');
const {GetCommand} = require('@aws-sdk/lib-dynamodb');
const {UpdateCommand} = require('@aws-sdk/lib-dynamodb');
const {DeleteCommand} = require('@aws-sdk/lib-dynamodb');
const {ScanCommand} = require("@aws-sdk/lib-dynamodb");
const {IDValueObject, CreateDateValueObject} = require('../../domain/value_object/_base');
const {NameValueObject, PasswordValueObject, EmailValueObject, AgeValueObject, GenderValueObject} = require('../../domain/value_object/user');
const UserEntity = require('../../domain/entity/user');

class UserRepository {
    constructor(dynamoDBDocumentClient) {
        this.dynamoDB = dynamoDBDocumentClient;
    }

    async addUserData(user) {
        const params = {
            TableName: 'user',
            Item: { ...user.toJson(), create_date: user.create_date.value.toISOString()}
        };

        try {
            const command = new PutCommand(params);
            await this.dynamoDB.send(command);
            return user;
        } catch (error) {
            throw new Error(error);
        }
    }

    async getUserData(id) {
        const params = {
            TableName: 'user',
            Key: {
                id: id.value
            }
        };

        try {
            const data = await this.dynamoDB.send(new GetCommand(params));
            return new UserEntity(
                new IDValueObject(data.Item.id),
                new NameValueObject(data.Item.name),
                new PasswordValueObject(data.Item.password),
                new EmailValueObject(data.Item.e_mail),
                new GenderValueObject(data.Item.gender),
                new AgeValueObject(data.Item.age),
                new CreateDateValueObject(new Date(data.Item.create_date))
            );
        } catch (error) {
            throw new Error(error);
        }
    }

    async getUserId(password, e_mail) {
        const params = {
            TableName: 'user',
            FilterExpression: '#password = :password and #e_mail = :e_mail',
            ExpressionAttributeNames: {
                '#password': 'password',
                '#e_mail': 'e_mail'
            },
            ExpressionAttributeValues: {
                ':password': password.value,
                ':e_mail': e_mail.value
            }
        };

        try {
            const data = await this.dynamoDB.send(new ScanCommand(params));
            if (data.Items.length === 0) {
                return null;
            }
            return new IDValueObject(data.Items[0].id);
        } catch (error) {
            throw new Error(error);
        }
    }

    async updateUserData(user) {
        const params = {
            TableName: 'user',
            Key: {
                id: user.id.value
            },
            UpdateExpression: 'set #name = :name, #password = :password, #e_mail = :e_mail, #gender = :gender, #age = :age, #create_date = :create_date',
            ExpressionAttributeNames: {
                '#name': 'name',
                '#password': 'password',
                '#e_mail': 'e_mail',
                '#gender': 'gender',
                '#age': 'age',
                '#create_date': 'create_date'
            },
            ExpressionAttributeValues: {
                ':name': user.name.value,
                ':password': user.password.value,
                ':e_mail': user.e_mail.value,
                ':gender': user.gender.value,
                ':age': user.age.value,
                ':create_date': user.create_date.value.toISOString()
            },
            ReturnValues: 'UPDATED_NEW'
        };
        
        try {
            await this.dynamoDB.send(new UpdateCommand(params));
            return user;
        } catch (error) {
            throw new Error(error);
        }
    }

    async deleteUserData(user) {
        const params = {
            TableName: 'user',
            Key: {
                id: user.id.value
            }
        };

        try {
            await this.dynamoDB.send(new DeleteCommand(params));
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = UserRepository;