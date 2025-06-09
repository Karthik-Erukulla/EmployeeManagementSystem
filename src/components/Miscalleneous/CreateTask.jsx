import React, { use, useState } from "react";

const CreateTask=()=>{
    
    const [ttitle,setTtitle]=useState('')
    const [tdate,setTdate]=useState('')
    const [tasign,setTasign]=useState('')
    const [tcat,setTcat]=useState('')
    const [tdisc,setTdisc]=useState('')

    const submitHandler = (e) => {
    const newTask = {
        title: ttitle,
        description: tdisc,
        date: tdate,
        category: tcat,
        active: true,
        newTask: true,
        completed: false,
        failed: false
    };

    const employees = JSON.parse(localStorage.getItem('employees')) || [];

    const empIndex = employees.findIndex(emp => emp.name == tasign);
    
    if (empIndex !== -1) {
        employees[empIndex].tasks.push(newTask);
        employees[empIndex].taskCount.newTasks += 1;
        employees[empIndex].taskCount.activeTasks += 1;
    } else {
        alert("Employee not found ");
        return;
    }

    localStorage.setItem('employees', JSON.stringify(employees));

    setTtitle('');
    setTdate('');
    setTasign('');
    setTcat('');
    setTdisc('');
};

    return(
        <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
                <form onSubmit={(e)=>{
                    submitHandler(e)
                }
                }
                className="flex flex-wrap w-full items-start justify-between">
                    <div className="w-1/2">
                    <div><h1 className="text-sm text-grey-300 mb-0.5">Task title</h1>
                    <input value={ttitle}
                onChange={(e)=>{
                    setTtitle(e.target.value)
                }} className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-grey-400 mb-4" type="text" placeholder="Make a UI design"/></div>
                    <div><h1 className="text-sm text-grey-300 mb-0.5">Date</h1>
                    <input value={tdate}
                onChange={(e)=>{
                    setTdate(e.target.value)
                }}  className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-grey-400 mb-4" type="date" /></div>
                    <div><h1 className="text-sm text-grey-300 mb-0.5">Assign to</h1>
                    <input value={tasign}
                onChange={(e)=>{
                    setTasign(e.target.value)
                }}  className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-grey-400 mb-4" type="text" placeholder="Employee name"></input></div>
                    <div><h1 className="text-sm text-grey-300 mb-0.5">Category</h1>
                    <input value={tcat}
                onChange={(e)=>{
                    setTcat(e.target.value)
                }} className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-grey-400 mb-4" type="text" placeholder="Design,development,etc.."></input></div>
                    </div>
                    <div className="w-2/5 flex flex-col items-start"><h1 className="text-sm text-grey-300 mb-0.5">Description</h1>
                    <textarea value={tdisc}
                onChange={(e)=>{
                    setTdisc(e.target.value)
                }} className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-grey-400" type="text" placeholder="Detailed discription of task(Max 500 words)" cols='30'  rows='30' />  
                    <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">Create Task</button>
                    </div>
                </form>
            </div>
    )
}
export default CreateTask