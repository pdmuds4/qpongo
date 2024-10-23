export default class UseCaseError extends customError {
    constructor(message: string) {
        super(
            message,
            "usecase",
            400
        );
    }
}