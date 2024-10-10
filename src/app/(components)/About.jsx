'use client';
import React, { useEffect, useState, useRef } from 'react';
function About() {

    const [isFixed, setIsFixed] = useState(false);
    const section2Ref = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (section2Ref.current) {
                const section2Top = section2Ref.current.getBoundingClientRect().top;
                if (section2Top < 0) {
                    console.log(section2Top)
                    setIsFixed("true");
                }

            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (

        <div
            id="section2"
            ref={section2Ref}
            className="h-screen relative flex flex-col justify-center bg-black mt-[100vh]"

            style={isFixed ? { position: 'fixed', inset: 0,marginTop: 0 } : {}}
             >
            <div className="bg-zinc-900 px-10 rounded-sm p-10 md:flex sm:flex md:px-32">
                <p className="text-4xl md:text-5xl font-League font-thin tracking-wider leading-tight">
                    Hi, I'm Randika, a designer and front-end developer based in Wales.
                </p>
                <p className="text-3xl font-League tracking-wider leading-tight mt-10 md:mt-0">
                    With over a decade of experience in multiple disciplines, I work with companies to create intuitive and engaging digital experiences.
                </p>
            </div>
        </div>

    )
}

export default About
