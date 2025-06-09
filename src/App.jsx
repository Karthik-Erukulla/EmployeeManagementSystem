import { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import Employeedashboard from './dashboard/Employeedb'
import TaskList from './components/Tasklist/TaskList'
import Admindb from './dashboard/Admindb'
import { AuthContext } from './context/AuthProvider'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'


const App=()=>{

  const authData=useContext(AuthContext)

  const [user,setUser]=useState(null)
  const [loggedInUserData,setloggedInUserData]=useState(null)

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    if(loggedInUser){
     const userData=JSON.parse(loggedInUser)
     setUser(userData.role)
     setloggedInUserData(userData.data) 
    }
  },[])
  
  const handleLogin=(email,password)=>{
      if(authData){
      const admin=authData.admin.find((e)=>email==e.email && password==e.password)
      if(admin){
        setUser("admin")
        setloggedInUserData(admin)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'admin',data:admin}))
      }
      else{
      const employee=authData.employees.find((e)=>email==e.email && password==e.password)
      
      if(employee){
      setUser("employee")
      setloggedInUserData(employee) 
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
      }
      else {
      alert("Invalid Credentials")
      }
      }
    }
    else {
      alert("Invalid Credentials")
      }
  }

  return (
    <>
     {!user?<Login handleLogin={handleLogin} />:''}
     {user=="admin"?<Admindb data={loggedInUserData} changeUser={setUser}/>: (user == "employee"?<Employeedashboard  changeUser={setUser} data={loggedInUserData}/>:null)}
    </>
  )
}


export default App
