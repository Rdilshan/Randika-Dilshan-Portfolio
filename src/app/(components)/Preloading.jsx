'use client';

function preloading() {
  const showmsg = () => {
    console.log("click")
  }
  return (
    <>
      <div className="h-screen flex justify-center items-center" onClick={showmsg}>
        <p className="font-bangers text-2xl md:text-4xl tracking-widest">Randika</p>
        
        after few secand this part show fristly this one hide
        <div className="mx-4 md:mx-6  flex justify-center w-16 h-16 border border-white rounded-full">
          <span className="text-4xl">.</span>
        </div>
        
        <div className="font-bangers text-2xl md:text-4xl tracking-widest">Dilshan</div>
      </div>
    </>
  )
}

export default preloading
