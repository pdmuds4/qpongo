class DeleteUseCase {
    constructor(repository, user) {
        this.repository = repository;
        this.user = user;
    }

    async execute() {
        const user_data = await this.repository.deleteUserData(this.user);
    }
}

module.exports = DeleteUseCase;