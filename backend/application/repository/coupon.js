const {PutCommand} = require('@aws-sdk/lib-dynamodb');
const {GetCommand} = require('@aws-sdk/lib-dynamodb');
const {UpdateCommand} = require('@aws-sdk/lib-dynamodb');
const {DeleteCommand} = require('@aws-sdk/lib-dynamodb');
const {ScanCommand} = require("@aws-sdk/lib-dynamodb");
const {IDValueObject, CreateDateValueObject} = require('../../domain/value_object/_base');
const {GoodsValueObject, DiscountValueObject, StoreValueObject, DeadlineValueObject, PhotoValueObject, IsUseValueObject, CategoryValueObject} = require('../../domain/value_object/coupon');
const CouponEntity = require('../../domain/entity/coupon');

class CouponRepository {
    constructor(dynamoDBDocumentClient) {
        this.dynamoDB = dynamoDBDocumentClient;
    }

    async addCouponData(coupon) {
        const params = {
            TableName: 'coupon',
            Item: { ...coupon.toJson(), deadline: coupon.deadline.value.toISOString(), create_date: coupon.create_date.value.toISOString() }
        };

        try {
            const command = new PutCommand(params);
            await this.dynamoDB.send(command);
            return coupon;
        } catch (error) {
            throw new Error(error);
        }
    }

    async getCouponData(id) {
        const params = {
            TableName: 'coupon',
            Key: {
                id: id.value
            }
        };

        try {
            const command = new GetCommand(params);
            const data = await this.dynamoDB.send(command);
            const result_data = new CouponEntity(
                new IDValueObject(data.Item.id),
                new IDValueObject(data.Item.user_id),
                new GoodsValueObject(data.Item.goods),
                new DiscountValueObject(data.Item.discount),
                new StoreValueObject(data.Item.store),
                new CreateDateValueObject(new Date(data.Item.deadline)),
                new PhotoValueObject(data.Item.photo_front),
                new PhotoValueObject(data.Item.photo_back),
                new IsUseValueObject(data.Item.is_used),
                new CategoryValueObject(data.Item.category),
                new CreateDateValueObject(new Date(data.Item.create_date))
            );
            return result_data;
        } catch (error) {
            throw new Error(error);
        }
    }

    async getUserCouponData(user_id) {
        const params = {
            TableName: 'coupon',
            FilterExpression: '#user_id = :user_id',
            ExpressionAttributeNames: {
                '#user_id': 'user_id'
            },
            ExpressionAttributeValues: {
                ':user_id': user_id.value
            }
        };
    
        try {
            const command = new ScanCommand(params);
            const data = await this.dynamoDB.send(command);
            const return_data = data.Items.map(item => new CouponEntity(
                new IDValueObject(item.id),
                new IDValueObject(item.user_id),
                new GoodsValueObject(item.goods),
                new DiscountValueObject(item.discount),
                new StoreValueObject(item.store),
                new CreateDateValueObject(new Date(item.deadline)),
                new PhotoValueObject(item.photo_front),
                new PhotoValueObject(item.photo_back),
                new IsUseValueObject(item.is_used),
                new CategoryValueObject(item.category),
                new CreateDateValueObject(new Date(item.create_date))
            ));
            return return_data;
        } catch (error) {
            throw new Error(error);
        }
    }

    async updateCouponData(coupon) {
        const params = {
            TableName: 'coupon',
            Key: {
                id: coupon.id.value
            },
            UpdateExpression: 'set #goods = :goods, #discount = :discount, #store = :store, #deadline = :deadline, #photo_front = :photo_front, #photo_back = :photo_back, #is_used = :is_used, #category = :category, #create_date = :create_date',
            ExpressionAttributeNames: {
                '#goods': 'goods',
                '#discount': 'discount',
                '#store': 'store',
                '#deadline': 'deadline',
                '#photo_front': 'photo_front',
                '#photo_back': 'photo_back',
                '#is_used': 'is_used',
                '#category': 'category',
                '#create_date': 'create_date'
            },
            ExpressionAttributeValues: {
                ':goods': coupon.goods.value,
                ':discount': coupon.discount.value,
                ':store': coupon.store.value,
                ':deadline': coupon.deadline.value.toISOString(),
                ':photo_front': coupon.photo_front.value,
                ':photo_back': coupon.photo_back.value,
                ':is_used': coupon.is_used.value,
                ':category': coupon.category.value,
                ':create_date': coupon.create_date.value.toISOString()
            }
        };

        try {
            const command = new UpdateCommand(params);
            await this.dynamoDB.send(command);
            return coupon;
        } catch (error) {
            throw new Error(error);
        }
    }

    async deleteCouponData(coupon) {
        const params = {
            TableName: 'coupon',
            Key: {
                id: coupon.value
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

module.exports = CouponRepository;