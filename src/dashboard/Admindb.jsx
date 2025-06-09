import React from "react";
import Header from "../components/Miscalleneous/header";
import CreateTask from "../components/Miscalleneous/CreateTask";
import AllTask from "../components/Miscalleneous/AllTask";

const Admindb=(props)=>{
    return(
        <div className="h-screen w-full p-10">
            <Header changeUser={props.changeUser} data={props.data}/>
            <CreateTask/>
            <AllTask />
        </div>
    )
}
export default Admindb