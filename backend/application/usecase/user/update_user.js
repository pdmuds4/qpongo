class UpdateUserUseCase {
    constructor(repository, user) {
        this.repository = repository;
        this.user = user;
    }

    async execute() {
        const user_data = await this.repository.updateUserData(this.user);
        return user_data;
    }
}

module.exports = UpdateUserUseCase;