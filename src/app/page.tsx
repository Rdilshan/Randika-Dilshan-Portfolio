import Image from "next/image";
import myimage from "../../public/image.png";

export default function Home() {
  return (
    <div className="h-screen relative">
      <h1 className="absolute text-8xl bottom-2/3 left-48">Randika</h1>
     <Image 
     src={myimage}
     alt="image"
     className="h-full object-contain z-50"
     />
     <h1 className="absolute text-8xl top-1/2 left-1/2">Dilshan</h1>
    </div>
  );
}
