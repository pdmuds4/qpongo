const {IDValueObject} = require('../../../domain/value_object/_base');

class CouponDeleteUseCase {
    constructor(repository, request) {
        this.repository = repository;
        this.request = request;
    }

    async execute() {
        const coupon_id = new IDValueObject(this.request.coupon_id);
        await this.repository.deleteCouponData(coupon_id);
        const return_json = {'message': 'クーポンを削除しました。'}
        return return_json;
    }
}

module.exports = CouponDeleteUseCase;