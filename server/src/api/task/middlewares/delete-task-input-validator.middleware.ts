import { checkSchema } from "express-validator";


export const deleteTaskInputValidator = checkSchema({
    task_id: {
        isInt: true,
        errorMessage: "task_id must be a integer"
    },
})