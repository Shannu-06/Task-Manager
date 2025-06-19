import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import { useCounter } from '../hooks/useCounter'

export default function StudentProfile({}) {

    // const user =useContext(UserContext)

    const {count,increment}=useCounter(0,1)



    const {email,userName}={"userName":"jot","email":"joysharon@email.com"}

    console.log(count,"user1234")
  
    // console.log(user?.user?.name,"user")
  return (
    <div>StudentProfile {count}

    <div>Count number is {count}</div>
    <button onClick={()=>{
      increment()
    }}> increment</button>
    
    {/* My name is {user?.user?.name} */}
    </div>
  )
}
