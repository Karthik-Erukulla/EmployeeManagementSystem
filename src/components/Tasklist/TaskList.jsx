import React, { useContext, useEffect, useState } from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import { AuthContext } from "../../context/AuthProvider";

const TaskList = (props) => {
  const authData=useContext(AuthContext)
  const user=authData.employees.find((e)=>props.data.email==e.email && props.data.password==e.password)

  return (
    <div
      id="tasklist"
      className="h-[55%] flex overflow-x-auto justify-start items-center gap-5 flex-nowrap w-full py-5 mt-10 px-4"
    >
      {user.tasks.map((elem) => {
        if (elem.active) {
          if (elem.newTask) {
            return (
              <NewTask
                setChangedet={props.setChangedet}
                userdata={props.data}
                data={elem}
              />
            );
          } else {
            return (
              <AcceptTask
                setChangedet={props.setChangedet}
                userdata={props.data}
                data={elem}
              />
            );
          }
        }
      })}
    </div>
  );
};

export default TaskList;
