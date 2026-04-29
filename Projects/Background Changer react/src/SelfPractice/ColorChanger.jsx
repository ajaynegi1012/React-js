import React, { useState } from 'react';

function ColorChanger() {
    let [counter, setCounter] = useState("Olive");
    return (
        <>
            <div className='w-full h-screen' style={{ background: counter }}>
                    <div className='flex justify-center p-5 rounded-full text-2xl text-amber-950' style={{background: "#29fcce99", fontWeight: 500}}><span>Background Color Changer</span></div>
                <div className='flex flex-wrap inset-x-1 justify-between fixed bottom-0 p-5 bg-white rounded-full m-5 gap-5'>
                    <div onClick={() => setCounter("Red")} className='text-white rounded-2xl text-center px-6 py-0.5 cursor-pointer' style={{ background: "red" }}>Red</div>
                    <div onClick={() => setCounter("Green")} className='text-white rounded-2xl text-center px-6 py-0.5 cursor-pointer' style={{ background: "Green" }}>Green</div>
                    <div onClick={() => setCounter("Blue")} className='text-white rounded-2xl text-center px-6 py-0.5 cursor-pointer' style={{ background: "Blue" }}>Blue</div>
                    <div onClick={() => setCounter("Olive")} className='text-white rounded-2xl text-center px-6 py-0.5 cursor-pointer' style={{ background: "Olive" }}>Olive</div>
                    <div onClick={() => setCounter("Gray")} className='text-white rounded-2xl text-center px-6 py-0.5 cursor-pointer' style={{ background: "Gray" }}>Gray</div>
                    <div onClick={() => setCounter("Yellow")} className='text-white rounded-2xl text-center px-6 py-0.5 cursor-pointer' style={{ background: "Yellow" }}>Yellow</div>
                    <div onClick={() => setCounter("Pink")} className='text-white rounded-2xl text-center px-6 py-0.5 cursor-pointer' style={{ background: "Pink" }}>Pink</div>
                    <div onClick={() => setCounter("Levender")} className='rounded-2xl text-center px-6 py-0.5 cursor-pointer shadow-xl' style={{ background: "Levender" }}>Levender</div>
                    <div onClick={() => setCounter("Purple")} className='text-white rounded-2xl text-center px-6 py-0.5 cursor-pointer' style={{ background: "Purple" }}>Purple</div>
                    <div onClick={() => setCounter("White")} className='rounded-2xl text-center px-6 py-0.5 cursor-pointer shadow-xl' style={{ background: "White" }}>White</div>
                    <div onClick={() => setCounter("Black")} className='text-white rounded-2xl text-center px-6 py-0.5 cursor-pointer' style={{ background: "Black" }}>Black</div>
                </div>
            </div>
        </>
    )
}

export default ColorChanger