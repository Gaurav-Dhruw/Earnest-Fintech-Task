

import { HttpRequestError } from "./HttpRequestError";


export class InternalServerError extends HttpRequestError {
    constructor(message?: string) {
        super({
            code: 500,
            message: message,
            error: "Internal Server Error"
        })
    }
}