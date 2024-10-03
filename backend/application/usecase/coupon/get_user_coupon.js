class GetUserCouponUseCase {
    constructor(repository, user_id) {
        this.repository = repository;
        this.user_id = user_id;
    }

    async execute() {
        const coupon_data = await this.repository.getUserCouponData(this.user_id);
        return coupon_data;
    }
}

module.exports = GetUserCouponUseCase;