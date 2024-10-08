class DeleteCouponUseCase {
    constructor(repository, coupon) {
        this.repository = repository;
        this.coupon = coupon;
    }

    async execute() {
        await this.repository.deleteCouponData(this.coupon);
    }
}

module.exports = DeleteCouponUseCase;