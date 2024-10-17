const CouponEntity = require('../../../domain/entity/coupon');

const {IDValueObject, CreateDateValueObject} = require('../../../domain/value_object/_base');
const {GoodsValueObject, DiscountValueObject, StoreValueObject, DeadlineValueObject, PhotoValueObject, IsUseValueObject, CategoryValueObject} = require('../../../domain/value_object/coupon');

class CouponRegisterUseCase {
    constructor(repository, request) {
        this.repository = repository;
        this.request = request;
    }

    async execute() {
        const japan_time = new Date().toLocaleString("ja-JP", {timeZone: "Asia/Tokyo"});
        const japan_deadline = new Date(this.request.deadline).toLocaleString("ja-JP", {timeZone: "Asia/Tokyo"});
        const coupon = new CouponEntity(
            // ユーザIDを生成するサービスはユースケースクラスの外で行う
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

        await this.repository.addCouponData(coupon);
        const return_json = {'massage': 'クーポンを登録しました。'};
        return return_json;
    }
}

module.exports = CouponRegisterUseCase;