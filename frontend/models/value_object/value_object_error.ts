export default class ValueObjectError extends customError {
    constructor(message: string) {
        super(
            message,
            "valueObject",
            400
        );
    }
}