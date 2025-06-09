import React from "react";

const NewTask=(props)=>{

    const submithand=()=>{
        
            const employees = JSON.parse(localStorage.getItem('employees')) || [];

    const empIndex = employees.findIndex(emp => emp.name == props.userdata.name);
    const taskIndex= employees[empIndex].tasks.findIndex(tsk=>tsk.title==props.data.title)    
        employees[empIndex].tasks[taskIndex].newTask=false;
        employees[empIndex].taskCount.newTasks -= 1;

    localStorage.setItem('employees', JSON.stringify(employees));
        props.setChangedet("")
        window.location.reload()
    }

    return(
        <div className=" flex-shrink-0 h-full p-5 w-[300px] bg-yellow-400 rounded-xl order-2 ">
        <div className="flex justify-between items-center">
          <h3 className="bg-yellow-600 px-3 py-1 rounded">{props.data.category}</h3>
          <h4 className="text-base">{props.data.date}</h4>
        </div>
        <h1 className="mt-5 text-2xl font-semibold ">{props.data.title}</h1>
        <p className="sm mt-2">
         {props.data.description}
        </p>
        <div className="flex justify-between mt-4">
            <button onClick={()=>{submithand()}} className="bg-green-500 py-1 px-2 text-sm">Accept </button>
        </div>
    </div>
    )
}

export default NewTask