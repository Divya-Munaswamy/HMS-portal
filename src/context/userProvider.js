import React, { useState } from 'react'
import UserContext from './userContext'

function UserProvider({children}){

    // const [user, setUser]= useState({null })
  return (
   <UserContext.Provider >
    {children}
   </UserContext.Provider>
  )
}

export default UserProvider