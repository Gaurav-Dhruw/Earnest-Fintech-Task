import { ErrorRequestHandler } from "express";
import { HttpRequestError } from "../errors/HttpRequestError";


export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    console.error(err);

    if (err instanceof HttpRequestError) {
        return res.status(err.code).json({
            error: err.error,
            status: err.code,
            message: err.message,
        });
    }

    return res.status(500).json({
        error: "Internal Server Error",
        status: 500,
        message: "Ops! Something Went Wrong",
    });
}