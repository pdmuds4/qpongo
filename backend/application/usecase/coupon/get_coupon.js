const {IDValueObject} = require('../../../domain/value_object/_base');

class CouponGetCouponsUseCase {
    constructor(repository, request) {
        this.repository = repository;
        this.request = request;
    }

    async execute() {
        const coupon_id = new IDValueObject(this.request.coupon_id);
        const response = await this.repository.getCouponData(coupon_id);
        return (response);
    }
}

module.exports = CouponGetCouponsUseCase;