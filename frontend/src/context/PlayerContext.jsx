import { createContext, useEffect, useRef, useState } from "react";
import axios from 'axios'

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {

    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();


    const [songsData, setSongsData] = useState([]);
    const [albumsData, setAlbumsData] = useState([]);
    const [track, setTrack] = useState(songsData[0]);
    const [playStatus, setPlayStatus] = useState(false);
    const [time, setTime] = useState({
        currentTime: {
            second: 0,
            minute: 0
        },
        totalTime: {
            second: 0,
            minute: 0
        }
    })

    const play = () => {
        audioRef.current.play();
        setPlayStatus(true);
    }

    const pause = () => {
        audioRef.current.pause();
        setPlayStatus(false);
    }

    const playWithId = (_id) => {
  const song = songsData.find((s) => s._id === _id);
  if (song) {
    setTrack(song);
    setTimeout(() => {
      if (audioRef.current) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => setPlayStatus(true))
            .catch((err) => {
              setPlayStatus(false);
            });
        }
      }
    }, 10);
  }
};



    const previous = async () => {
        songsData.map(async (item,index)=>{
            if(track._id === item._id && index > 0){
                await setTrack(songsData[index-1]);
                await audioRef.current.play();
                setPlayStatus(true);
            }
        })
    }

    const next = async () => {
         songsData.map(async (item,index)=>{
            if(track._id === item._id && index < songsData.length){
                await setTrack(songsData[index+1]);
                await audioRef.current.play();
                setPlayStatus(true);
            }
        })
    }

    const seekSong = (e) => {
        audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth) * audioRef.current.duration);
    }

    const getSongsData = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/songs/list`);

            setSongsData(response.data.songs);
            setTrack(response.data.songs[0]);
        } catch (error) { }
    }

    const getAlbumsData = async () => {
        try {

            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/album/list`);

            setAlbumsData(response.data.albums);


        } catch (error) { }
    }

    useEffect(() => {
  const audio = audioRef.current;
  if (track && audio && track.file) {
    // audio.load(); 

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => setPlayStatus(true))
        .catch((err) => {
          setPlayStatus(false);
        });
    }
  }
}, [track]);


    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const handleTimeUpdate = () => {
    if (seekBar.current && audio.duration) {
        seekBar.current.style.width = (Math.floor(audio.currentTime / audio.duration * 100)) + "%";
    }

    setTime({
        currentTime: {
            second: Math.floor(audio.currentTime % 60),
            minute: Math.floor(audio.currentTime / 60)
        },
        totalTime: {
            second: Math.floor(audio.duration % 60),
            minute: Math.floor(audio.duration / 60)
        }
    });
};


        audio.addEventListener("timeupdate", handleTimeUpdate);

        return () => {
            audio.removeEventListener("timeupdate", handleTimeUpdate);
        };
    }, [track]);

    useEffect(() => {
      getSongsData();
      getAlbumsData();
    
    }, [])
    



    const contextValue = {
        audioRef,
        seekBg,
        seekBar,
        track,
        setTrack,
        playStatus,
        setPlayStatus,
        time,
        setTime,
        play,
        pause,
        playWithId,
        previous,
        next,
        seekSong,
        songsData,
        albumsData
    }

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )

}

export default PlayerContextProvider;