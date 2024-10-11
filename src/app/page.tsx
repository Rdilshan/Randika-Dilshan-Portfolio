

import Footbar from "./(components)/Footbar";
import About from "./(components)/About";
import Contact from "./(components)/Contact";
import Lastwork from "./(components)/Lastwork";
import Mainpage from "./(components)/Mainpage";


export default function Home() {
  return (
    <>

      <Footbar />
      <Mainpage />
      <About />
      <Lastwork />
      <Contact />

    </>
  );
}
