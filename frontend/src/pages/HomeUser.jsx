import React, { useContext, useEffect, useRef, useState } from 'react'
import UserHeader from '../components/UserHeader'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Hero from '../components/Hero'
import MusicCard from '../components/MusicCard'
import Player from '../components/Player'
import { assets } from '../assets/assets'
import AlbumItem from '../components/AlbumItem'
import SongItem from '../components/SongItem'
import { useLocation } from 'react-router-dom'
import { PlayerContext } from '../context/PlayerContext'

const HomeUser = () => {


  const { audioRef, track, playStatus, pause, play, playWithId, songsData, albumsData } = useContext(PlayerContext);



  return (
    <div className='main h-screen w-full'>
      <div className='page1 relative bg-[url(https://artiumacademy.mo.cloudinary.net/v1n/blogs_10_top_guitar.jpg)] sm:h-screen min-h-[70vh] w-full bg-cover'>
        <div className='header z-10 fixed top-0 w-full h-[10%] border-none rounded'>
          <div className='h-full bg-gray-800 '>
            <UserHeader />
          </div>
        </div>
        <div className='player z-1 fixed bottom-0 w-full h-[8%]'>
          {
            songsData.length !== 0
              ? <>
                <Player />
              </>
              : null
          }

          {track?.file && <audio key={track.file} ref={audioRef} src={track.file} preload="auto" />}


        </div>
        <div onClick={() => playWithId(track?.id)} className='absolute bottom-30 right-10 sm:right-20 flex flex-col items-center justify-center gap-2'>
          {track?.image && <img className='h-40 w-40 rounded' src={track.image} alt={track.name || "Track"} />}

          <h2 className='text-white text-3xl '>{track?track.name:""}</h2>
          <p className='text-gray-400 text-xl'>{track?track.desc.slice(0, 25):""}</p>
          {playStatus ? <button onClick={pause} className='bg-blue-500 cursor-pointer text-xl rounded-full px-2 py-2'><img className='h-5' src={assets.pause_icon} alt="" /></button> : <button onClick={play} className='bg-red-500 cursor-pointer text-xl rounded-full px-2 py-2'><img className='h-5' src={assets.play_icon} alt="" /></button>}

        </div>
      </div>
      <div className='page2 min-h-[80vh] sm:min-h-[140vh] w-full bg-gray-950'>
        <div className='flex items-center gap-2'>
          <p className='bg-white text-black mt-4 px-4 ml-4 py-1 rounded-2xl cursor-pointer'>All</p>
          <p className='bg-black text-white mt-4 px-4 py-1 rounded-2xl cursor-pointer'>Music</p>
          <p className='bg-black text-white mt-4 px-4 py-1 rounded-2xl cursor-pointer'>Podcasts</p>
        </div>
        <div className='mb-4'>
          <h1 className='text-white my-5 font-bold text-xl px-4'>Featured Charts</h1>
          <div className='flex overflow-auto'>
            {Array.isArray(albumsData) && albumsData.map((item, index) => (<AlbumItem key={index} image={item.image} name={item.name} desc={item.desc} id={item._id} />))}
          </div>
        </div>
        <div className='mb-4'>
          <h1 className='text-white my-5 font-bold text-xl px-4'>Today's biggest hits</h1>
          <div className='flex  overflow-auto'>
            {songsData.map((item, index) => (<SongItem onClick={() => playWithId(item._id)} key={index} image={item.image} name={item.name} desc={item.desc} id={item._id} />))}
          </div>

        </div>
      </div>
    </div>
  )
}

export default HomeUser

