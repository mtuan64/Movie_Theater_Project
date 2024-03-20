import React, { createContext, useState } from 'react'

export const UserContext = createContext();

 const UserInfoContext = ({children}) => {
    const[user, setUser] = useState(null);
  return (
    <UserContext.Provider
    value={{
        user,
        setUser,
    }}
    >
        {children}</UserContext.Provider>
  )
}

export default UserInfoContext