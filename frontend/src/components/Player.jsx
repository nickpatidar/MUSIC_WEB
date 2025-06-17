import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

const Player = () => {

    const { track, seekBar, seekBg, playStatus, play, pause, time, previous, next, seekSong } = useContext(PlayerContext);

    return track ? (
        <div className='h-[100%] bg-black flex justify-between items-center text-white px-4 '>
            <div className='hidden lg:flex items-center gap-3'>
                <img className='w-8' src={track.image} alt="" />
                <div>
                    <p className='text-base'>{track.name}</p>
                    <p className='text-sm'>{track.desc.slice(0, 12)}</p>
                </div>
            </div>
            <div className='flex flex-col items-center gap-1 m-auto'>
                <div className='flex gap-3 pt-1'>
                    <img className='w-3 cursor-pointer' src={assets.shuffle_icon} alt="shuffle" />
                    <img onClick={previous} className='w-3 cursor-pointer' src={assets.prev_icon} alt="previous" />
                    {playStatus ? <img onClick={pause} className='w-3 cursor-pointer' src={assets.pause_icon} alt="pause" /> : <img onClick={play} className='w-3 cursor-pointer' src={assets.play_icon} alt="play" />}
                    <img onClick={next} className='w-3 cursor-pointer' src={assets.next_icon} alt="next" />
                    <img className='w-3 cursor-pointer' src={assets.loop_icon} alt="repeat" />
                </div>
                <div className='flex items-center gap-3'>
                    <p className='text-sm'>{time.currentTime.minute}:{time.currentTime.second}</p>
                    <div ref={seekBg} onClick={seekSong} className='w-[60vw] max-w-[400px] bg-gray-300 rounded-full cursor-pointer'>
                        <hr ref={seekBar} className='h-1 border-none w-0 bg-green-800 rounded-full' />
                    </div>
                    <p className='text-sm'>{time.totalTime.minute}:{time.totalTime.second}</p>
                </div>
            </div>
            <div className='hidden lg:flex items-center gap-2 opacity-75'>
                <img className='w-3' src={assets.plays_icon} alt="" />
                <img className='w-3' src={assets.mic_icon} alt="" />
                <img className='w-3' src={assets.queue_icon} alt="" />
                <img className='w-3' src={assets.speaker_icon} alt="" />
                <img className='w-3' src={assets.volume_icon} alt="" />
                <div className='w-15 bg-slate-50 h-1 rounded'></div>
                <img className='w-3' src={assets.mini_player_icon} alt="" />
                <img className='w-3' src={assets.zoom_icon} alt="" />
            </div>

        </div>
    ) : null
}

export default Player
