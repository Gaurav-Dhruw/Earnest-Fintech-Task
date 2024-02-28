import { checkSchema } from "express-validator";

export const createTaskInputValidator = checkSchema({
    title: {
        isString: true,
        notEmpty: true,
        errorMessage: "title must be a non empty string"
    },
    description: {
        custom: {
            options: (value) => {
                if (value === null || (typeof value === 'string' && value.trim() !== '')) {
                    return true;
                }
                throw new Error();
            }
        },
        optional: true,
        errorMessage: "description must be a non empty string or null"
    }
})