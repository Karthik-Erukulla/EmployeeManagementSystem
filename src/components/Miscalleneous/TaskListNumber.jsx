import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const TaskListNumber=({data})=>{
    const authData=useContext(AuthContext)
    const user=authData.employees.find((e)=>data.email==e.email && data.password==e.password)
    return (
        <div className="flex justify-between screen gap-5 mt-10">
            <div className="p-10 rounded-xl py-6 px-9 w-[45%] bg-red-400" >
            <h2 className="text-3xl font-semibold">{user.taskCount.activeTasks}</h2>
            <h3 className="text-xl font-medium">Assigned Tasks</h3>
            </div>
            <div className="p-10 rounded-xl py-6 px-9 w-[45%] bg-yellow-400" >
            <h2 className="text-3xl font-semibold">{user.taskCount.newTasks}</h2>
            <h3 className="text-xl font-medium">New Tasks</h3>
            </div>
            <div className="p-10 rounded-xl py-6 px-9 w-[45%] bg-blue-400" >
            <h2 className="text-3xl font-semibold">{user.taskCount.failedTasks}</h2>
            <h3 className="text-xl font-medium">Failed Tasks</h3>
            </div>
            <div className="p-10 rounded-xl py-6 px-9 w-[45%] bg-green-400" >
            <h2 className="text-3xl font-semibold">{user.taskCount.completedTasks}</h2>
            <h3 className="text-xl font-medium">Completed Tasks</h3>
            </div>
        </div>
    )
}

export default TaskListNumber