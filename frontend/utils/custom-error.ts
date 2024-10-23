export default class CustomError extends Error {
    level: 'valueObject'|'dto'|'usecase'|'service';
    status_code: number;

    constructor(
        message: string, 
        level: 'valueObject'|'dto'|'usecase'|'service',
        status_code: number
    ) {
        super(message);
        this.level = level;
        this.status_code = status_code;
    }
}