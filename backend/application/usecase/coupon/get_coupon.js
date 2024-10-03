class GetCouponUseCase {
    constructor(repository, id) {
        this.repository = repository;
        this.id = id;
    }

    async execute() {
        const coupon_data = await this.repository.getCouponData(this.id);
        return coupon_data;
    }
}

module.exports = GetCouponUseCase;