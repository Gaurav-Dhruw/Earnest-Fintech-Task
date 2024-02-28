import { checkSchema } from "express-validator";

export const updateTaskInputValidator = checkSchema({
    task_id: {
        isInt: true,
        errorMessage: "task_id must be a integer"
    },
    title: {
        isString: true,
        notEmpty: true,
        optional: true,
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
    },
    completed: {
        isBoolean: true,
        optional: true,
        errorMessage: "completed must be a boolean"
    }
})