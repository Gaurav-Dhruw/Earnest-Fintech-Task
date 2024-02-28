import { useState } from "react";
import { Button } from "../Comman/UI/Button/Button"
import { useMutation } from "@tanstack/react-query";
import { axiosClient } from "../../libs/axios.lib";
import { queryClient } from "../../contexts/ProviderWrapper";

type TaskProps = {
    id: number;
    title: string;
    description?: string;
    completed: boolean;
}

const updateTaskStatus = async ({ id, completed }: { id: number, completed: boolean }) => {
    return axiosClient.patch(`/tasks/${id}`, { completed })
}

const deleteTask = async ({ id }: { id: number }) => {
    return axiosClient.delete(`/tasks/${id}`)
}


export const Task = ({ id, title, description, completed }: TaskProps) => {
    const [isActive, setIsActive] = useState(false);
    const { mutate: updateTaskMutation } = useMutation({
        mutationFn: updateTaskStatus,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['tasks']
            })
        }
    });
    const { mutate: deleteTaskMutation } = useMutation({
        mutationFn: deleteTask,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['tasks']
            })
        }
    });

    const handleStatusUpdate = (id: number, completed: boolean) => {
        updateTaskMutation({ id, completed: !completed });
    }

    const handleTaskDeletion = (id: number) => {
        deleteTaskMutation({ id });
    }
    return (
        <div className="px-10 py-6 border-2 rounded-md shadow-md w-full" onMouseEnter={setIsActive.bind(this, true)} onMouseLeave={setIsActive.bind(this, false)}>
            <div>
                <div className="mb-8">
                    <h2 className="text-lg font-bold mb-2">{title}</h2>
                    <p>{description}</p>
                </div>
                <div className="flex justify-between items-end h-10">
                    <div className="" >
                        {
                            completed ?
                                <span className="inline-block border-2 py-[.5] px-6 rounded-sm text-sm bg-green-200">Completed</span> :
                                <span className="inline-block border-2 py-[.5] px-6 rounded-sm text-sm bg-red-200">Not Completed</span>
                        }
                    </div>
                    {
                        isActive ?
                            <div className="flex gap-10">
                                <Button
                                    label={completed ? "Mark Not Completed" : 'Mark Completed'}
                                    style={{
                                        background: '#387ADF',
                                        color: "#fff"
                                    }}
                                    onClick={handleStatusUpdate.bind(this, id, completed)} />
                                <Button
                                    label={'Delete Task'}
                                    style={{
                                        border: 'red 0.1rem solid',
                                        color: 'red'
                                    }}
                                    onClick={handleTaskDeletion.bind(this, id)} />
                            </div> :
                            null
                    }
                </div>
            </div>
        </div>
    )
}
