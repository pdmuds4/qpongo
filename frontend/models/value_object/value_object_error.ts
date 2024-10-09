import CustomError from "~/utils/custom_error";

export default class ValueObjectError extends CustomError {
    constructor(message: string) {
        super(
            message,
            "valueObject",
            400
        );
    }
}