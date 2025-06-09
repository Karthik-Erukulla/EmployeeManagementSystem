import React from "react";

const AcceptTask=(props)=>{
    const submithand=({flag})=>{
        
    const employees = JSON.parse(localStorage.getItem('employees')) || [];

    const empIndex = employees.findIndex(emp => emp.name == props.userdata.name);
    const taskIndex= employees[empIndex].tasks.findIndex(tsk=>tsk.title==props.data.title)    
        employees[empIndex].tasks[taskIndex].active=false;employees[empIndex].taskCount.activeTasks-= 1;
        if(flag=="y"){employees[empIndex].tasks[taskIndex].completed=true;
        employees[empIndex].taskCount.completedTasks+=1;}
        else{
            employees[empIndex].tasks[taskIndex].failed=true;
        employees[empIndex].taskCount.failedTasks+=1;
        }
    localStorage.setItem('employees', JSON.stringify(employees));
        props.setChangedet("")
        window.location.reload()
    }

    return(
        <div className=" flex-shrink-0 h-full p-5 w-[300px] bg-red-300 rounded-xl order-1">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 rounded">{props.data.category}</h3>
          <h4 className="text-base">{props.data.date}</h4>
        </div>
        <h1 className="mt-5 text-2xl font-semibold ">{props.data.title}</h1>
        <p className="sm mt-2">{props.data.description}</p>
        <div className="flex justify-between mt-4">
            <button onClick={()=>submithand("y")} className="bg-green-500 py-1 px-2 text-sm ">Completed </button>
            <button onClick={()=>submithand("n")} className="bg-red-500 py-1 px-2 text-sm">Failed </button>
        </div>
    </div>
    )
}

export default AcceptTask