// src/components/Hero.jsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 1.5, ease: 'power3.out' }
    );
  }, []);

  return (
    <header
      ref={heroRef}
      className="bg-cover bg-center text-white py-32 px-6 text-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=1470&q=80')`,
      }}
    >
      <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Feel the Rhythm</h1>
      <p className="text-lg mb-6">Explore the latest beats, albums, and artists.</p>
      <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-lg transition-all">
        Start Listening
      </button>
    </header>
  );
};

export default Hero;
