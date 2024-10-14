'use client';

import { useEffect, useState } from 'react';

function preloading() {

  const [value, setvalue] = useState(100);

  useEffect(() => {
    const timer = setInterval(() => {
      setvalue((prevValue) => {
        if (prevValue > 0) {
          console.log("Running");
          return prevValue - 1;
        } else {
          clearInterval(timer); 
          return 0;
        }
      });
    }, 20);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="h-screen flex justify-center items-center" >
        <p className="font-bangers text-2xl md:text-4xl tracking-widest animate-fadeinleft">Randika</p>



        <div className="relative size-12 mx-4 md-mx-6 flex justify-center">
          <span className="font-bangers absolute mt-2 animate-dropin">.</span>

          <svg className="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
            <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-blue-600 dark:text-blue-500" strokeWidth="1" strokeDasharray="100" strokeDashoffset={value} strokeLinecap="round"></circle>
          </svg>

        </div>

        <div className="font-bangers text-2xl md:text-4xl tracking-widest animate-fadeinright">Dilshan</div>
      </div>
    </>
  )
}

export default preloading
