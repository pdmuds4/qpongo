const {IDValueObject} = require('../../../domain/value_object/_base');

class CouponDeleteUseCase {
    constructor(repository, request) {
        this.repository = repository;
        this.request = request;
    }

    async execute() {
        const coupon_id = new IDValueObject(this.request.coupon_id);
        const response = await this.repository.deleteCoupon(coupon_id.value);
        return response;
    }
}

module.exports = CouponDeleteUseCase;