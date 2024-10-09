class AddCouponUseCase {
    constructor(repository, coupon) {
        this.repository = repository;
        this.coupon = coupon;
    }

    async execute() {
        const coupon = await this.repository.addCouponData(this.coupon);
        return coupon;
    }
}

module.exports = AddCouponUseCase;