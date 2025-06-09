import React from "react";
import { setLocalStorage } from "../../../utils/localStorage";

const Header=(props)=>{

    const logout=()=>{
        localStorage.setItem('loggedInUser','')
        props.changeUser('')
    }

    return(
        <div className="flex items-end justify-between">
            <h1 className='text-3xl font-semibold'>Hello <br/><span className='text-4xl font-semibold'>{props.data.name} </span>   </h1>
            <button onClick={logout} className="bg-red-500 text-white px-5 px-2 rounded-smally text-lg font-medium">Log out</button>
        </div>
    )
}
export default Header