class DeleteCouponUseCase {
    constructor(repository, coupon) {
        this.repository = repository;
        this.coupon = coupon;
    }

    async execute() {
        const coupon = await this.repository.deleteCouponData(this.coupon);
        return coupon;
    }
}

module.exports = DeleteCouponUseCase;