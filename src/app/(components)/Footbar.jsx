import React from 'react'

function Footbar() {
    return (
        <>
            <div className="fixed bottom-5 w-full flex justify-center z-50">
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
