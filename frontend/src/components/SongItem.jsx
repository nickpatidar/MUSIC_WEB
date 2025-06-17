import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext';

const SongItem = ({name,image,desc,id,onClick}) => {

  const {playWithId} = useContext(PlayerContext);
  return (
    <div onClick={()=>playWithId(id)} className='min-w-[130px]  px-3 p-2 rounded cursor-pointer hover:bg-[#ffffff26]'>
        <img className='rounded h-30 w-30' src={image} alt="" />
        <p className='font-bold text-slate-200 mt-2 mb-1'>{name}</p>
        <p className='text-gray-500 text-sm'>{desc}</p>
      
    </div>
  )
}

export default SongItem
