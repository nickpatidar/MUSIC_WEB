import React, { useRef, useState } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./home.css"
import Logo from '../components/Logo'
import { Link } from 'react-router-dom'


const Home = () => {

  const [showContent, setShowContent] = useState(false)
  const logoRef = useRef(null)


  useGSAP(() => {
    setShowContent(true)
    const tl = gsap.timeline();

    if (!showContent) return;

    gsap.to("img", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-0.7",
      ease: "Expo.easeInOut",
    });

    gsap.to(".logo", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-0.5",
      ease: "Expo.easeInOut",
    });

    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-0.5",
      ease: "Expo.easeInOut",
    });

    const main = document.querySelector('.main');

    main?.addEventListener("mousemove", (e) => {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to("img", {
        x: `${xMove * 0.1}%`,
      });
    })
  }, [showContent])

  return (
    <>
      {showContent && (
        <div className='main w-full h-screen relative'>

          <div ref={logoRef} className=' logo absolute text-white left-2 top-3 scale-[3] rotate-[-20degree] z-30' >
            <Logo />
          </div>

          <div className='cntr w-full h-screen bg-black absolute overflow-hidden'>

            <img className='homeImg hidden lg:block scale-[3] rotate-[-10degree]' src="src/img/home1.jpg" alt="" />

          </div>

          <div className='text text-white gap-4 scale-[3] rotate-[-10degree] flex flex-col justify-center items-center absolute top-[28%] left-[58%] -translate-x-1/2 z-10'>
            <h1 className='text-6xl font-semibold leading-none -ml-30  bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-300 '>Music Is My Escape</h1>
            <h3 className='text-2xl font-medium leading-none -ml-28'><span className='text-3xl text-purple-700 font-semibold'>Play</span> & <span className='text-3xl text-purple-500 font-semibold'>Feel</span> the <span className='text-3xl text-purple-500 font-semibold'>Music</span> on a Way</h3>
            <Link to='/user-login' className='text-xl cursor-pointer  bg-gradient-to-r from-blue-500 to-purple-300 px-5 sm:px-10 py-3 -ml-29 hover:px-11 hover:text-2xl  border-none rounded-full'>Let's Enjoy The Music</Link>
          </div>
        </div>
      )}
    </>
  )
}

export default Home
