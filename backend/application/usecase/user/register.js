class RegisterUser {
    constructor(repository, user) {
        this.repository = repository;
        this.user = user;
    }

    async execute() {
        await this.repository.addUser(this.user);
            return this.user;
    }
}

module.exports = RegisterUser;