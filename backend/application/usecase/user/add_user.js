class AddUserUseCase {
    constructor(repository, user) {
        this.repository = repository;
        this.user = user;
    }

    async execute() {
        const user_data = await this.repository.addUserData(this.user);
        return user_data;
    }
}

module.exports = AddUserUseCase;