import CustomError from "@utils/custom-error";

export default class UseCaseError extends CustomError {
    constructor(message: string) {
        super(
            message,
            "valueObject",
            400
        );
    }
}