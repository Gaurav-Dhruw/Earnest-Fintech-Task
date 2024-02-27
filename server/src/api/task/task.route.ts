import { Router } from "express";
import { createTask, deleteTask, getAllTasks, updateTask } from "./task.controller";

export const router = Router();

router.get('/', getAllTasks);
router.post('/create', createTask);
router.patch('/:task_id', updateTask);
router.delete('/:task_id', deleteTask);

