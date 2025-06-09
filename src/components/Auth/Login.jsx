import React, { useState } from "react"
function Login({handleLogin}) {
    const [usermail,setusermail]=useState('');
    const [userpass,setuserpass]=useState('');
    const submithandler=(e)=>{
        e.preventDefault()
        handleLogin(usermail,userpass)
        setusermail('')
        setuserpass('')
    }


  return (
    <div className='flex h-screen w-screen items-center justify-center bg-black '>
        <div className="border-emerald-800 border-2 rounded-xl  p-20">
            <form className="flex flex-col items-center justify-center" onSubmit={(e)=>{submithandler(e)}}>
                <input required type='email' className='outline-none bg-transparent border-emerald-800 rounded-full border-2 py-3 px-3 w-90 placeholder-text-grey-300 text-white mb-5 text-small' placeholder="Enter email"
                value={usermail}
                onChange={(e)=>{
                    setusermail(e.target.value)
                }} />
                <input required type='password'className='outline-none bg-transparent  border-emerald-800 rounded-full border-2 py-3 px-3 w-90 placeholder-text-grey-300 text-white mb-5' placeholder='Enter password' 
                value={userpass}
                onChange={(e)=>{
                    setuserpass(e.target.value)
                }}/>
                <button className=' text-white font-semibold rounded outline-none border-2 border-emerald-800 bg-emerald-800  py-3 px-3 mb-5' >Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login