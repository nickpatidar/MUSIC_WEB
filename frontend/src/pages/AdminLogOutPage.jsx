import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const AdminLogOut = () => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    axios.get(`${import.meta.env.VITE_BASE_URL}/admin/logout`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((response) => {
        if (response.status === 200) {
            localStorage.removeItem('token')
            navigate('/admin-login')
        }
    })

  return (
    <div>
      
    </div>
  )
}

export default AdminLogOut


