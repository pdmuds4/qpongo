const CouponEntity = require('../../../domain/entity/coupon');

const {IDValueObject, CreateDateValueObject} = require('../../../domain/value_object/_base');
const {GoodsValueObject, DiscountValueObject, StoreValueObject, DeadlineValueObject, PhotoValueObject, IsUseValueObject, CategoryValueObject, RegistrationDateValueObject} = require('../../../domain/value_object/coupon');

class CouponEditUseCase {
    constructor(repository, request) {
        this.repository = repository;
        this.request = request;
    }

    async excute() {
        const coupon = new CouponEntity(
            new IDValueObject(this.request.id),
            new IDValueObject(this.request.user_id),
            new GoodsValueObject(this.request.goods),
            new DiscountValueObject(this.request.discount),
            new StoreValueObject(this.request.store),
            new DeadlineValueObject(new Date(this.request.deadline)),
            new PhotoValueObject(this.request.photo_front),
            new PhotoValueObject(this.request.photo_back),
            new IsUseValueObject(this.request.is_use),
            new CategoryValueObject(this.request.category),
            new CreateDateValueObject(new Date())
        );

        const response = await this.repository.updateCouponData(coupon);
        return response.id;
    }
}

module.exports = CouponEditUseCase;