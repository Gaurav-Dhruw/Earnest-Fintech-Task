import { prisma } from "../../libs/prisma.lib";
import { CreateTaskDto } from "./dtos/create-task.dto";
import { UpdateTaskDto } from "./dtos/update-task.dto";
import { Task as TaskEntity } from "./task.entity";


export const findTaskById = async (id: number) => {
    const task = await prisma.task.findUnique({
        where: {
            id
        }
    });

    return task;
}

export const findAllTasks = async () => {
    const result = await prisma.task.findMany();
    return result;
}

export const updateTaskById = async (id: number, inputTask: UpdateTaskDto) => {
    const result = await prisma.task.update({
        where: {
            id,
        },
        data: inputTask
    });

    return result;
}

export const deleteTaskById = async (id: number) => {
    await prisma.task.delete({
        where: {
            id,
        }
    });
}

export const createNewTask = async (inputTask: CreateTaskDto) => {
    const result = await prisma.task.create({
        data: inputTask
    });

    return result;
}