import React from 'react'
import { assets } from '../assets/admin/assets'
import Logo from './Logo'
import { NavLink } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='bg-[#00293a] min-h-screen pl-[3vw]'>

      <div className='mt-3 w-[max(10vw,100px)] sm:block'>
        <Logo />
      </div>
      <div className='flex flex-col mt-8 gap-4'>
        <NavLink to='/admin-panel%20/add-song' className='flex items-center gap-2 text-gray-800 bg-white border border-black p-2 pr-[max(8vw,10px) drop-shadow-[-4px_4px_#0b6084] text-sm font-medium ]'>
          <img src={assets.add_song} className='w-5' alt="" />
          <p className='hidden sm:block'>Add Song</p>
        </NavLink>

        <NavLink to='/admin-panel%20/list-song' className='flex items-center gap-2 text-gray-800 bg-white border border-black p-2 pr-[max(8vw,10px) drop-shadow-[-4px_4px_#0b6084] text-sm font-medium ]'>
          <img src={assets.song_icon} className='w-5' alt="" />
          <p className='hidden sm:block'>List Song</p>
        </NavLink>

        <NavLink to='/admin-panel%20/add-album' className='flex items-center gap-2 text-gray-800 bg-white border border-black p-2 pr-[max(8vw,10px) drop-shadow-[-4px_4px_#0b6084] text-sm font-medium ]'>
          <img src={assets.add_album} className='w-5' alt="" />
          <p className='hidden sm:block'>Add Album</p>
        </NavLink>

        <NavLink to='/admin-panel%20/list-album' className='flex items-center gap-2 text-gray-800 bg-white border border-black p-2 pr-[max(8vw,10px) drop-shadow-[-4px_4px_#0b6084] text-sm font-medium ]'>
          <img src={assets.album_icon} className='w-5' alt="" />
          <p className='hidden sm:block'>List Album</p>
        </NavLink>

      </div>

    </div>
  )
}

export default SideBar
