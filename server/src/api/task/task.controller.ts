import { Handler } from "express";
import { Task } from "./task.entity";
import { createNewTask, deleteTaskById, findAllTasks, findTaskById, updateTaskById } from "./task.service";
import { BadRequestError } from "../../errors";
import { CreateTaskDto } from "./dtos/create-task.dto";
import { UpdateTaskDto } from "./dtos/update-task.dto";



export const getAllTasks: Handler = async (req, res, next) => {
    try {
        const tasks = await findAllTasks();

        return res.status(200).json({ tasks });

    } catch (err) {
        next(err);
    }
}

export const createTask: Handler = async (req, res, next) => {
    try {
        const task: Task = req.body;


        const taskInput = new CreateTaskDto({
            title: task.title,
            description: task.description
        })

        const createdTask = await createNewTask(taskInput);


        return res.status(200).json({ task: createdTask });


    } catch (err) {
        next(err);
    }
}

export const updateTask: Handler = async (req, res, next) => {
    try {
        const task: Task = req.body;
        const taskId: number = parseInt(req.params.task_id)


        const taskInput = new UpdateTaskDto({
            title: task.title,
            description: task.description,
            completed: task.completed,
        });

        const taskFromDB = await findTaskById(taskId);

        if (!taskFromDB) throw new BadRequestError("Task does not exists!");

        const updatedTask = await updateTaskById(taskId, taskInput);

        return res.status(200).json({ task: updatedTask });


    } catch (err) {
        next(err);
    }
}


export const deleteTask: Handler = async (req, res, next) => {
    try {

        const taskId: number = parseInt(req.params.task_id);

        const taskFromDB = await findTaskById(taskId);

        if (!taskFromDB) throw new BadRequestError("Task does not exists!");

        await deleteTaskById(taskId);

        return res.sendStatus(200);

    } catch (err) {
        next(err);
    }
}   