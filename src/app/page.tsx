import Image from "next/image";
import myimage from "../../public/image.png";
import shaow from "../../public/shadow-2.png";
import stylecss from "./page.module.css";
import Typewritter from "./(components)/Typewriter";
import Footbar from "./(components)/Footbar";

//last work
import arrow from "../../public/diagonal-arrow-right-up-outline.svg"



export default function Home() {
  return (
    <>

      <Footbar />

      <div id="section1" className="md:h-screen fixed inset-0 h-full">

        <div className="absolute w-full h-5/6  grid grid-cols-2 ">
          <h1 className=" flex font-bangers justify-end items-end md:px-10 -z-10 md:text-8xl sm:text-7xl text-5xl md:tracking-widest tracking-wider">
            Randika
          </h1>
          <h1></h1>
          <h1></h1>

          <h1 className="font-bangers md:text-8xl sm:text-7xl text-5xl md:tracking-widest tracking-wider">
            Dilshan
          </h1>
        </div>

        <Image
          src={myimage}
          alt="image"
          className=" h-screen object-cover  max-w-100 md:object-contain z-50  " />



        <div className="absolute  bottom-1/4 w-full h-40 flex justify-center items-end">
          <Typewritter />
        </div>


        <section className="absolute bottom-2 left-1/2 z-50 flex flex-col items-center justify-center">
          <span className={stylecss.scroll_icon}>
            <span className={stylecss.scroll_icon__dot}></span>
          </span>
          <span className="text-sm font-League font-light tracking-[.25em]">scroll</span>
        </section>

        <Image
          src={shaow}
          alt="shaow"
          className="w-screen h-full object-fill absolute top-0" />
      </div>


      <div id="section2" className="h-screen relative align-middle flex flex-col justify-center bg-black mt-[100vh]" >

        <div className=" bg-zinc-900 px-10 rounded-sm p-10 md:flex sm:flex md:px-32 ">
          <p className="text-4xl md:text-5xl font-League font-thin tracking-wider leading-tight">Hi, Im Randika,a designer and front-end developer based in Wales.</p>
          <p className="text-3xl font-League tracking-wider leading-tight mt-10 md:mt-0">With over a decade of experience in multiple disciplines, I work with companies to create intuitive and engaging digital experiences.</p>
        </div>

      </div>

      <div id="section3" className="h-screen relative flex flex-col items-center bg-black py-10" >

        <h1 className="text-5xl font-League font-thin tracking-wider leading-tight">LATEST WORK</h1>
        <div className="bg-red-500 w-full h-3/4 flex justify-center">
          <div className="bg-cyan-300 w-3/4">

            <div className="bg-zinc-900">
              <span>a decade of experience</span>
              <div className="w-10">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="m0 0h24v24h-24z" fill="#fff" opacity="0" transform="matrix(-1 0 0 -1 24 24)" />
                  <path
                    d="m18 7.05a1 1 0 0 0 -1-1l-8-.05a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l8.29-8.29v5.58a1 1 0 0 0 1 1 1 1 0 0 0 1-1z"
                    fill="#ffffff" />
                </svg>
              </div>
            </div>
            <div>body</div>

          </div>
        </div>

      </div>

    </>
  );
}
