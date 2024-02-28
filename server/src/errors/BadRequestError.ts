import { HttpRequestError } from "./HttpRequestError";


export class BadRequestError extends HttpRequestError {
    constructor(message?: string) {
        super({
            code: 400,
            message: message,
            error: "Bad Request Error"
        })
    }
}