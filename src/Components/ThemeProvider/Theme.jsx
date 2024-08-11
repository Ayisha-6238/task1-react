import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

export const themeContext = createContext()

function Theme({children}) {
    const [users,setUsers] = useState([])

    useEffect(()=>{
        axios.get('https://reqres.in/api/users').then((Response)=>{
            setUsers(Response.data.data)
        })
    },[])
  return (
    <div>
      <themeContext.Provider value={{users,setUsers}}>
        {children}
      </themeContext.Provider>
    </div>
  )
}

export default Theme
