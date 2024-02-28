import React, { FormEvent, useState } from 'react'
import { Button } from '../Comman/UI/Button/Button'
import { useMutation } from '@tanstack/react-query'
import { axiosClient } from '../../libs/axios.lib'
import { queryClient } from '../../contexts/ProviderWrapper'


const createTask = async ({ title, description }: { title: string, description?: string }) => {
    return axiosClient.post('/tasks/create', {
        title,
        description
    })
}
export const TaskForm = () => {
    const { mutate } = useMutation({
        mutationFn: createTask,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['tasks']
            });
            setFormData({
                title: '',
                description: ''
            })
        }
    })
    const [formData, setFormData] = useState({
        title: '',
        description: ''
    })
    const handleFormSubmission = (e: FormEvent) => {
        e.preventDefault();

        mutate(formData);
    }

    const handleFormData = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const name = e.target.name;
        const value = e.target.value;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }
    return (
        <form className='flex flex-col shadow-md border-2 py-8 px-12 rounded-md' onSubmit={handleFormSubmission}>
            <div className='mb-10'>

                <label className='flex gap-5 mb-6 items-center'>
                    <span>
                        Title:
                    </span>
                    <input className="focus:outline-none border-2 p-2 rounded-sm" name="title" value={formData.title} onChange={handleFormData} />
                </label>

                <label >
                    <span className="mb-4 inline-block">
                        Description:
                    </span>
                    <textarea className="focus:outline-none border-2 w-full resize-none h-[10rem] p-2 rounded-sm" onChange={handleFormData} name="description" value={formData.description} />
                </label>
            </div>
            <div className='flex justify-center'>
                <Button label={"Add Task"} style={{ background: '#FF3EA5', color: "#fff" }} disabled={!formData.title} />
            </div>

        </form>
    )
}
