import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";



const AllTask=()=>{
    
    const authData= useContext(AuthContext)
  return (
    <>
    <h1 className="font-semibold text-xl mt-7">Task List</h1>
    <div className="bg-none rounded p-5 mt-4 h-[225px] overflow-auto">
      {authData.employees.map((employee) =>
        employee.tasks.map((task, index) => {    
            return (
              <div
                key={`${employee.id}-${index}`}
                className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded"
              >
                <h1 className="font-semibold">{employee.name}</h1>
                <h1 className="font-semibold">{task.title}</h1>
                <h1 className="font-semibold">{task.active ? "⏳ Pending":(task.completed?"✅ Done" :"❌ Failed")}</h1>
              </div>
            );
        })
      )}
    </div>
    </>
  );
};

export default AllTask