import { useQuery } from "@tanstack/react-query"
import { Task } from "../../components/Task/Task"
import { axiosClient } from "../../libs/axios.lib"
import { TaskForm } from "../../components/TaskForm/TaskForm";
import { Loader } from "../../components/Loader/Loader";

const getTasks = async () => {
    return axiosClient.get('/tasks');
}

export const Home = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['tasks'],
        queryFn: getTasks
    })


    if (isLoading) return <Loader />;
    return (
        <main className="px-20 py-10">
            <section className="flex gap-20 w-full justify-between" >
                <div className="flex flex-col gap-12 items-center w-4/6 pl-20">

                    {
                        data?.data.map((task: { id: number, completed: boolean, title: string, description?: string }) => {
                            return <Task key={task.id.toString()} id={task.id} title={task.title} description={task?.description} completed={task.completed} />
                        })
                    }
                </div>
                <div>
                    <TaskForm />

                </div>

            </section>
        </main>
    )
}
