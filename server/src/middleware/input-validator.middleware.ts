import { Handler } from "express";
import { validationResult } from "express-validator";
import { BadRequestError } from "../errors";


export const inputValidator: Handler = (req, res, next) => {
    try {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            console.log({ errors: errors.array() });
            throw new BadRequestError(errors.array()[0].msg)
        }

        next();

    } catch (err) {
        next(err);
    }
}