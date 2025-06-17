import React, { useContext, useRef, useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import "./userloginpage.css"
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../components/Logo'
import { AdminDataContext } from '../context/AdminContext'
import axios from 'axios'

const AdminLoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userData, setUserData] = useState({})

    const navigate = useNavigate();
    const {admin, setAdmin} = useContext(AdminDataContext);

    const submitHandler = async (e) => {
        e.preventDefault();

        const adminData = {
            email: email,
            password: password
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/admin/login`, adminData)

        if (response.status === 200) {
            const data = response.data;

            setAdmin(data.admin)
            localStorage.setItem('token', data.token);
            navigate('/admin-home')
        }

        setEmail('');
        setPassword('');
    }

  return (
    <>
            <div className='h-screen relative bg-[url(img/home1.jpg)] bg-cover overflow-hidden'>
                    <div className='absolute top-3 left-2'>
                        <Logo />
                </div>
                <div className=' flex items-center justify-center h-[94%]'> 
                    <div className=' bg-transparent backdrop-blur-3xl w-[350px] sm:w-[420px] shadow-black rounded-lg text-white absolute top-[100px]'>
                        <form onSubmit={(e) =>{
                            submitHandler(e)
                        }}
                        >
                            <h1 className='text-3xl text-center mt-2 mb-4'>Login Admin Account</h1>
                            <h3 className='text-lg font-medium mb-2 px-5 '>What's your email</h3>
                            <input
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='bg-[#eeeeee] text-black mx-3 mb-7 rounded-lg px-4 py-2 border w-[90%] text-lg placeholder:text-base'
                                type="email"
                                placeholder='email@example.com'
                            />

                            <h3 className='text-lg font-medium px-5 mb-2'>Enter Password</h3>

                            <input
                                className='bg-[#eeeeee] mx-3 text-black mb-7 rounded-lg px-4 py-2 border w-[90%] text-lg placeholder:text-base'
                                required type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='password'
                            />

                            <button
                                className='bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 mx-3 w-[90%] text-lg cursor-pointer placeholder:text-base'
                            >Login</button>

                        </form>
                        <p className='text-center mb-3'>Join a fleet? <Link to='/admin-signup' className='text-blue-400'>Register as a Admin</Link></p>
                    </div>
                </div>
                <div>
                    <Link
                        to='/user-login'
                        className='bg-[#d5622d] hidden lg:flex items-center justify-center text-white font-semibold mb-5 rounded-lg px-4 py-2 text-center absolute bottom-[20px] left-[425px] w-[420px] text-lg placeholder:text-base'
                    >Sign in as User</Link>
                    <Link
                        to='/user-login'
                        className='bg-[#d5622d] lg:hidden flex items-center justify-center text-white font-semibold mb-18 ml-5 rounded-lg px-4 py-2 text-center absolute bottom-0 sm:bottom-100 sm:left-[116px] w-[330px] sm:w-[420px] text-lg placeholder:text-base'
                    >Sign in as User</Link>
                </div>
            </div>
        </>
  )
}

export default AdminLoginPage
