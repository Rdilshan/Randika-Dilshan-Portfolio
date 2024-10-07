import Image from "next/image";
import myimage from "../../public/image.png";
import shaow from "../../public/shadow-2.png";
import stylecss from "./page.module.css";
import Typewritter from "./(components)/Typewriter";



export default function Home() {
  return (
    <>
      <div className="md:h-screen relative h-full">

        <div className="absolute w-full h-5/6  grid grid-cols-2 ">
          <h1 className=" flex justify-end items-end md:px-10 -z-10 md:text-8xl sm:text-7xl text-5xl">
            Randika
          </h1>
          <h1></h1>
          <h1></h1>

          <h1 className="md:text-8xl sm:text-7xl text-5xl">
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
          <span className="text-sm">scroll</span>
        </section>

        <Image
          src={shaow}
          alt="shaow"
          className="w-screen h-full object-fill absolute top-0" />
      </div>

    </>
  );
}
