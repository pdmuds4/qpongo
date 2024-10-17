const CouponEntity = require('../../../domain/entity/coupon');

const {IDValueObject, CreateDateValueObject} = require('../../../domain/value_object/_base');
const {GoodsValueObject, DiscountValueObject, StoreValueObject, DeadlineValueObject, PhotoValueObject, IsUseValueObject, CategoryValueObject, RegistrationDateValueObject} = require('../../../domain/value_object/coupon');

class CouponEditUseCase {
    constructor(repository, request) {
        this.repository = repository;
        this.request = request;
    }

    async execute() {
        const japan_time = new Date().toLocaleString("ja-JP", {timeZone: "Asia/Tokyo"});
        const japan_deadline = new Date(this.request.deadline).toLocaleString("ja-JP", {timeZone: "Asia/Tokyo"});
        const coupon = new CouponEntity(
            new IDValueObject(this.request.id),
            new IDValueObject(this.request.user_id),
            new GoodsValueObject(this.request.goods),
            new DiscountValueObject(this.request.discount),
            new StoreValueObject(this.request.store),
            new DeadlineValueObject(new Date(japan_deadline)),
            new PhotoValueObject(this.request.photo_front),
            new PhotoValueObject(this.request.photo_back),
            new IsUseValueObject(this.request.is_use),
            new CategoryValueObject(this.request.category),
            new CreateDateValueObject(new Date(japan_time))
        );

        const response = await this.repository.updateCouponData(coupon);
        return response.id;
    }
}

module.exports = CouponEditUseCase;