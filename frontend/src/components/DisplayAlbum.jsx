import React, { useContext, useEffect, useRef, useState } from 'react'
import UserHeader from '../components/UserHeader'
import Logo from '../components/Logo'
import { useLocation, useParams } from 'react-router-dom';
import { assets } from '../assets/assets';
import Player from './Player';
import { PlayerContext } from '../context/PlayerContext';


const DisplayAlbum = () => {

 const displayRef = useRef();
const { id } = useParams();
const { playWithId, audioRef, track, albumsData, songsData } = useContext(PlayerContext);

const [albumData, setAlbumData] = useState(null);

 const albumSongs = albumData
    ? songsData.filter((song) => song.album === albumData.name)
    : [];


useEffect(() => {
  if (albumsData && id) {
    const item = albumsData.find((x) => x._id === id);
    if (item) setAlbumData(item);
  }
}, [albumsData, id]);

useEffect(() => {
  if (displayRef.current && albumData?.bgColour) {
    displayRef.current.style.background = `linear-gradient(${albumData.bgColour}, #121212)`;
  }
}, [albumData]); 


  useEffect(()=>{
  albumsData.map((item)=>{
    if(item._id === id){
      setAlbumData(item)
    }
  })
},[])

  return albumData ? (
    <>
      <div ref={displayRef} className='bg-[#121212] min-h-[100px] w-full'>
        <div className='header fixed top-0 w-full h-[10%] border-none rounded'>
          <div className='h-full bg-gray-700 '>
            <UserHeader />
          </div>
          <div className='player fixed bottom-0 w-full h-[8%]'>
            {
            songsData.length !== 0
              ? <>
                <Player />
              </>
              : null
          }
               {track?.file && <audio key={track.file} ref={audioRef} src={track.file} preload="auto" />}
          </div>
        </div>
        <div className='flex gap-6 text-slate-200 flex-col md:flex-row pt-25 pl-10 md:items-end'>
          <img className='w-70 h-70 rounded' src={albumData.image} alt="" />
          <div className='flex flex-col gap-2 pb-10 pl-10 text-gray-300'>
            <p className='text-2xl'>Playlist</p>
            <h2 className='text-6xl font-bold mb-4 mb:text-7xl'>{albumData.name}</h2>
            <h4 className=''>{albumData.desc}</h4>
            <p className='mt-1'>
              <img className='inline-block w-5 pb-1' src="/src/img/h1.png" alt="" />
              <b>Music</b>
              · 1,323,154 likes
              · <b>50 songs,</b>
              about 2hr 30 min
            </p>
          </div>
        </div>
        <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
          <p><b className='mr-4'>#</b>Title</p>
          <p>Album</p>
          <p className='hidden sm:block'>Date Added</p>
          <img className='m-auto w-4' src={assets.clock_icon} alt="" />
        </div>
        <hr className='border-1 border-slate-200' />
        {
          albumSongs.map((item, index) => (
            <div onClick={()=>playWithId(item._id)} key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer'>
              <p className='text-white'>
                <b className='mr-4 text-[#a7a7a7]'>{index + 1}</b>
                <img className='inline w-10 mr-5' src={item.image} alt="" />
                {item.name}
              </p>
              <p className='text-[15px] '>{albumData.name}</p>
              <p className='text-[15px] hidden sm:block'>5 days ago</p>
              <p className='text-[15px] text-center'>{item.duration}</p>
            </div>
          ))
        }
      </div>
    </>
  ) : null
}

export default DisplayAlbum
