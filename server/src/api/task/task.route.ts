import { Router } from "express";
import { createTask, deleteTask, getAllTasks, updateTask } from "./task.controller";
import { createTaskInputValidator } from "./middlewares/create-task-input-validator.middleware";
import { inputValidator } from "../../middleware/input-validator.middleware";
import { updateTaskInputValidator } from "./middlewares/update-task-input-validator.middware";
import { deleteTaskInputValidator } from "./middlewares/delete-task-input-validator.middleware";

export const router = Router();

router.get('/', getAllTasks);
router.post('/create', createTaskInputValidator, inputValidator, createTask);
router.patch('/:task_id', updateTaskInputValidator, inputValidator, updateTask);
router.delete('/:task_id', deleteTaskInputValidator, inputValidator, deleteTask);

