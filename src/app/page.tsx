import Image from "next/image";
import myimage from "../../public/image.png";
import shaow from "../../public/shadow-2.png";
import stylecss from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className="h-screen relative">
        <h1 className="absolute text-8xl bottom-2/3 left-48 -z-10">Randika</h1>
        <Image
          src={myimage}
          alt="image"
          className="h-full object-contain z-50" />
        <h1 className="absolute text-8xl top-44 mt-10 left-1/2">Dilshan</h1>
        <div className="absolute  bottom-1/4 w-full h-40 flex justify-center items-end">
          <h2 className="text-7xl">Backend Developer</h2>
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
          className="w-full h-full object-fill absolute top-0" />
      </div>
    </>
  );
}
