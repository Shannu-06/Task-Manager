import React, { useContext, useState } from 'react'
import StudentProfile from './StudentProfile'
import { UserContext } from '../contexts/UserContext'

export default function HomePage() {

  const [count, setCount] = useState(0)
  const user = useContext(UserContext)

  console.log(user, "user123")



  return (
    <div>
      Home Page
    </div>
  )
}
