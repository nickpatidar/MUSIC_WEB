import React from 'react'
import { useNavigate } from 'react-router-dom'

const AlbumItem = ({image, name, desc, id}) => {

  const navigate = useNavigate()
  return (
    <div onClick={()=>navigate(`/album/${id}`)} className='min-w-[130px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] transition-all duration-300 ease-in-out'>
        <img className='rounded' src={image} alt="" />
        <p className='font-bold text-slate-300 mt-2 mb-1'>{name}</p>
        <p className='text-gray-500 text-sm'>{desc}</p>
      
    </div>
  )
}

export default AlbumItem
