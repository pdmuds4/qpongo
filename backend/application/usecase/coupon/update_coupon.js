class UpdateCouponUseCase {
  constructor(repository, coupon) {
    this.repository = repository;
    this.coupon = coupon;
  }

    async execute() {
        const coupon = await this.repository.updateCouponData(this.coupon);
        return coupon;
    }
}

module.exports = UpdateCouponUseCase;