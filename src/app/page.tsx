'use client';
import { useState, useEffect } from "react";
import Footbar from "./(components)/Footbar";
import About from "./(components)/About";
import Contact from "./(components)/Contact";
import Lastwork from "./(components)/Lastwork";
import Mainpage from "./(components)/Mainpage";
import Preloading from "./(components)/Preloading";

export default function Home() {
  const [showPreloading, setShowPreloading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false); 
  const [fadeIn, setFadeIn] = useState(false); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); 
      setTimeout(() => {
        setShowPreloading(false); 
      }, 1000); 
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>

      {showPreloading && (
        <div className={fadeOut ? "fade-out" : ""}>
          <Preloading />
        </div>
      )}

      {!showPreloading && (
        <>
        {/* <Footbar /> */}
          <Mainpage />
          <About />
          <Lastwork />
          <Contact />
        </>
      )}
    </>
  );
}
