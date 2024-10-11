'use client';

import React, { useEffect, useState } from 'react';

function Footbar() {

  const [showTypewriter, setShowTypewriter] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight) {
      setShowTypewriter(true);
    } else {
      setShowTypewriter(false);
    }
  };


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`
    fixed bottom-5 w-full flex justify-center z-40
    transition-all duration-1000 ease-in-out transform
    ${showTypewriter
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8 pointer-events-none'}
  `}
      >
        <div className="flex justify-center items-center p-1 gap-5 bg-zinc-800 w-1/2 h-7 rounded-2xl">
          <p className="text-xs bg-black p-2 rounded-3xl tracking-widest">Home</p>
          <p className="text-xs tracking-widest">About</p>
          <p className="text-xs tracking-widest">Contact</p>
        </div>
      </div>
    </>
  )
}

export default Footbar
