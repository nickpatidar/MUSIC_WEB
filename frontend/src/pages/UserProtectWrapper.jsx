import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const UserProtectWrapper = ({children}) => {

    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    if (!token) {
        navigate('/user-login')
    }

  return (
    <div>
      {children}
    </div>
  )
}

export default UserProtectWrapper

