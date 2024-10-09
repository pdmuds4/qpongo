class GetUserUseCase {
    constructor(repository, id) {
        this.repository = repository;
        this.id = id;
    }

    async execute() {
        const user_data = await this.repository.getUserData(this.id);
        return user_data;
    }
}

module.exports = GetUserUseCase;