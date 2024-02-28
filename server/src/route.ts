import { Router } from "express";
import { router as taskRouter } from './api/task/task.route';

export const router = Router();

router.use('/tasks', taskRouter);
