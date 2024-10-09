export default class UseCaseError extends customError {
    constructor(message: string) {
        super(
            message,
            "valueObject",
            400
        );
    }
}