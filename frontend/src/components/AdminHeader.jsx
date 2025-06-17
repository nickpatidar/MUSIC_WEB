import React, { useState } from 'react'
import Logo from '../components/Logo'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const AdminHeader = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <div className='w-full h-full  flex justify-start items-center '>
      <div className='flex justify-between items-center w-full' >
        <Logo />
        <div>
            <nav>
                <ul className='sm:flex hidden justify-center items-center gap-4 text-white text-sm'>
                    <li>
                    <a href='/admin-home' className='hover:text-gray-400'>Home</a>
                    </li>
                    <li>
                    <a href='' className='hover:text-gray-400'>Album</a>
                    </li>
                    <li>
                    <a href='' className='hover:text-gray-400'>Songs</a>
                    </li>
                    <li>
                    <a href='' className='hover:text-gray-400 '>Pages</a>
                    <i className="ri-arrow-down-s-line "></i>
                    </li>
                    <li>
                    <a href='/admin-panel /*' className='hover:text-gray-400'>Admin Panel</a>
                    </li>
                    <li>
                    <a href='' className='hover:text-gray-400'>User Chats</a>
                    </li>
                </ul>
            </nav>
        </div>
        <div className='flex justify-center items-center gap-4'>
          <p onClick={() => setSidebarOpen(!sidebarOpen)} className='w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-4 mt-1 ' >N</p>
        </div>
      </div>
       {sidebarOpen && (
              <div className="absolute top-0 right-0 w-[100%] rounded-xl h-screen bg-gray-800 text-white p-4 z-10 shadow-lg transition-all duration-300">
                <div className='flex items-center justify-between'>
                  <button
                  onClick={() => setSidebarOpen(false)}
                  className="text-left w-full mb-4 text-xl hover:text-gray-400"
                >
                  <i className="ri-arrow-left-line"></i>
                </button>
                <div className=''>
                <p className='w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center ' >N</p>
              </div>
                </div>
                  <ul className='flex flex-col justify-center items-center pt-15 gap-6 text-white text-base'>
                          <li>
                    <a href='/admin-homer' className='hover:text-gray-400'>Home</a>
                    </li>
                    <li>
                    <a href='' className='hover:text-gray-400'>Album</a>
                    </li>
                    <li>
                    <a href='' className='hover:text-gray-400'>Songs</a>
                    </li>
                    <li>
                    <a href='' className='hover:text-gray-400 '>Pages</a>
                    <i className="ri-arrow-down-s-line "></i>
                    </li>
                    <li>
                    <a href='/admin-panel /*' className='hover:text-gray-400'>Admin Panel</a>
                    </li>
                    <li>
                    <a href='' className='hover:text-gray-400'>User Chats</a>
                    </li>
                      
                  <Link to="/user-logout" className='hover:text-red-400 text-red-500 text-xl pt-5'>Logout</Link>
                      </ul>
              </div>
            )}
    </div>
  )
}

export default AdminHeader
