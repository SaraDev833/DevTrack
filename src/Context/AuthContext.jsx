import React, { createContext, useState } from 'react'
import currentUser from '../data/CurrentUser';

 export const AuthContext = createContext();

 export const AuthProvider = ({children})=>{
    const [user , setUser] = useState(currentUser);

      return(
        <AuthContext.Provider
        value={{
            user , setUser
        }}
        >
                  {children}
        </AuthContext.Provider>
      )
 }

