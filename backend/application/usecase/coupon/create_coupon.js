class CreateCouponUseCase {
    constructor(repository, coupon) {
        this.repository = repository;
        this.coupon = coupon;
    }

    async execute() {
        const coupon = await this.repository.addCoupon(this.coupon);
        return coupon;
    }
}

module.exports = CreateCouponUseCase;