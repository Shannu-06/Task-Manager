import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({ name: 'Joy sharon', role: 'admin',email:"joysharon@email.com" });
   const [count,setCount]=useState(0)
  
  return (
    <UserContext.Provider value={{user,setUser,count,setCount}}>
      {children}
    </UserContext.Provider>
  );
}