import React, { useEffect, useState } from "react";
import Header from "../components/Miscalleneous/header";
import TaskListNumber from "../components/Miscalleneous/TaskListNumber";
import TaskList from "../components/Tasklist/TaskList";



function Employeedashboard(props) {
    
    
      const [changedet,setChangedet]=useState(null)
    
      return (

        <div className="m-2">
            <Header changeUser={props.changeUser}  data={props.data}/>
            <TaskListNumber setChangedet={setChangedet} data={props.data}/>
            <TaskList setChangedet={setChangedet} data={props.data}/>
        </div>
    )
}
export default Employeedashboard