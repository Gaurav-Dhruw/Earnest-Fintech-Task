
type HttpRequestErrorOptions = {
    error: string,
    message?: string,
    code: number,
}

export class HttpRequestError extends Error {
    code: number;
    error: string;

    constructor(options: HttpRequestErrorOptions) {
        super(options.message);
        this.error = options.error;
        this.code = options.code;
    }
}