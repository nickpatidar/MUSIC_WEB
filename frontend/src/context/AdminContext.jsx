import React, { createContext, useState } from 'react'

export const AdminDataContext = createContext()

const AdminContext = ({children}) => {

    const [admin, setAdmin] = useState({
        email: '',
        password: '',
        fullName: {
            firstName: '',
            lastName: ''
        }
    })
  return (
    <div>
      <AdminDataContext.Provider value={{admin, setAdmin}} >
        {children}
      </AdminDataContext.Provider>
    </div>
  )
}

export default AdminContext
