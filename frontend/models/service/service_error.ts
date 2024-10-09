export default class ServiceError extends customError {
    constructor(message: string, status_code: number) {
        super(
            message,
            "service",
            status_code
        );
    }
}