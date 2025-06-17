import React, { useRef, useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import "./userloginpage.css"
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../components/Logo'
import axios from 'axios'
import { UserDataContext } from '../context/UserContext'

const UserSignUpPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userData, setUserData] = useState({})

    const navigate = useNavigate();
    const { user, setUser } = React.useContext(UserDataContext);

    const submitHandler = async (e) => {
        e.preventDefault();

        const newUser = {
            fullname: {
                firstname: firstName,
                lastname: lastName
            },
            email: email,
            password: password
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)

        if (response.status === 201) {
            const data = response.data;

            setUser(data.user)
            localStorage.setItem('token', data.token);
            navigate('/user-home')
        }

        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
    }

    return (
        <>
            <div className='h-screen relative bg-[url(img/home1.jpg)] bg-cover overflow-hidden'>
                <div className='absolute top-3 left-2'>
                    <Logo />
                </div>
                <div className=' flex items-center justify-center h-[94%]'>
                    <div className=' bg-transparent backdrop-blur-3xl w-[350px] sm:w-[420px] shadow-black rounded-lg text-white absolute top-[100px] lg:top-[10px]'>
                        <form onSubmit={(e) => {
                            submitHandler(e)
                        }} >
                            <h1 className='text-3xl text-center mt-2 mb-4'>Create Account</h1>

                            <h3 className='text-lg font-medium mb-2 px-5 '>What's your Name</h3>
                            <div className='flex' >
                                <input
                                    required
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    className='bg-[#eeeeee] text-black mx-3 mb-7 rounded-lg px-4 py-2 border w-[90%] text-lg placeholder:text-base'
                                    type="text"
                                    placeholder='First name'
                                />
                                <input
                                    required
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    className='bg-[#eeeeee] text-black mx-3 mb-7 rounded-lg px-4 py-2 border w-[90%] text-lg placeholder:text-base'
                                    type="text"
                                    placeholder='Last name'
                                />
                            </div>

                            <h3 className='text-lg font-medium mb-2 px-5 '>What's your email</h3>
                            <input
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='bg-[#eeeeee] text-black mx-3 mb-7 rounded-lg px-4 py-2 border w-[90%] text-lg placeholder:text-base'
                                type="email"
                                placeholder='email@example.com'
                            />

                            <h3 className='text-lg font-medium px-5 mb-2'>Create Password</h3>

                            <input
                                className='bg-[#eeeeee] mx-3 text-black mb-7 rounded-lg px-4 py-2 border w-[90%] text-lg placeholder:text-base'
                                required type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='password'
                            />

                            <button
                                className='bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 mx-3 w-[90%] text-lg cursor-pointer placeholder:text-base'
                            >Create Account</button>

                        </form>
                        <p className='text-center mb-3'>Already have a account? <Link to='/user-login' className='text-blue-400'>Login here</Link></p>
                    </div>
                </div>
                <div>
                    <Link
                        to='/admin-login'
                        className='bg-[#10b461] hidden sm:flex items-center justify-center text-white font-semibold mb-5 rounded-lg px-4 py-2 text-center absolute bottom-0 left-[425px] w-[420px] text-lg placeholder:text-base'
                    >Sign in as Admin</Link>
                    <Link
                        to='/admin-login'
                        className='bg-[#10b461] lg:hidden flex items-center justify-center text-white font-semibold mb-18 ml-5 rounded-lg px-4 py-2 text-center absolute bottom-0 sm:bottom-80 sm:left-[116px] w-[330px] sm:w-[420px] text-lg placeholder:text-base'>Sign in as Admin</Link>
                </div>
            </div>
        </>
    )
}

export default UserSignUpPage
