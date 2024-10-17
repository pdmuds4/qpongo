const {IDValueObject} = require('../../../domain/value_object/_base');

class CouponGetUserCouponsUseCase {
    constructor(repository, request) {
        this.repository = repository;
        this.request = request;
    }

    async execute() {
        const user_id = new IDValueObject(this.request.user_id);
        const response = await this.repository.getUserCouponData(user_id.value);
        return (response);
    }
}

module.exports = CouponGetUserCouponsUseCase;