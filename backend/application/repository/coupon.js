const {PutCommand} = require('@aws-sdk/lib-dynamodb');
const {GetCommand} = require('@aws-sdk/lib-dynamodb');
const {UpdateCommand} = require('@aws-sdk/lib-dynamodb');
const {DeleteCommand} = require('@aws-sdk/lib-dynamodb');
const {IDValueObject, RegistrationDateValueObject} = require('../../domain/value_object/_base');
const {GoodsValueObject, DiscountValueObject, StoreValueObject, DeadlineValueObject, PhotoValueObject, IsUseValueObject, CategoryValueObject} = require('../../domain/value_object/coupon');
const CouponEntity = require('../../domain/entity/coupon');

class CouponRepository {
    constructor(dynamoDBDocumentClient) {
        this.dynamoDB = dynamoDBDocumentClient;
    }

    async addCoupon(coupon) {
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
            return new CouponEntity(
                new IDValueObject(data.Item.id),
                new IDValueObject(data.Item.user_id),
                new GoodsValueObject(data.Item.goods),
                new DiscountValueObject(data.Item.discount),
                new StoreValueObject(data.Item.store),
                new DeadlineValueObject(new Date(data.Item.deadline)),
                new PhotoValueObject(data.Item.photo_front),
                new PhotoValueObject(data.Item.photo_back),
                new IsUseValueObject(data.Item.is_use),
                new CategoryValueObject(data.Item.category),
                new RegistrationDateValueObject(new Date(data.Item.create_date))
            );
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
            UpdateExpression: 'set #goods = :goods, #discount = :discount, #store = :store, #deadline = :deadline, #photo_front = :photo_front, #photo_back = :photo_back, #is_use = :is_use, #category = :category, #create_date = :create_date',
            ExpressionAttributeNames: {
                '#goods': 'goods',
                '#discount': 'discount',
                '#store': 'store',
                '#deadline': 'deadline',
                '#photo_front': 'photo_front',
                '#photo_back': 'photo_back',
                '#is_use': 'is_use',
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
                ':is_use': coupon.is_use.value,
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
                id: coupon.id.value
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