import { useState } from "react"

function App() {
  const [color, setColor] = useState("Olive");

  return (
    <>
      <div className="w-full h-screen"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex-wrap justify-between bottom-12 inset-x-0  px-3">

          <div className="flex flw justify-between text-center gap-2 bg-white px-5 py-5 rounded-full">
            <button onClick={() => setColor("red")} className="outline-none px-4 rounded-full" style={{ backgroundColor: "red", cursor: "pointer" }}>Red</button>
            <button onClick={() => setColor("Green")} className="outline-none px-4 rounded-full" style={{ backgroundColor: "green" }}>Green</button>
            <button onClick={() => setColor("Yellow")} className="outline-none px-4 rounded-full" style={{ backgroundColor: "yellow" }}>Yellow</button>
            <button onClick={() => setColor("Blue")} className="outline-none px-4 rounded-full" style={{ backgroundColor: "blue" }}>Blue</button>
            <button onClick={() => setColor("pink]")} className="outline-none px-4 rounded-full" style={{ backgroundColor: "pink" }}>pink</button>
            <button onClick={() => setColor("olive")} className="outline-none px-4 rounded-full text-white" style={{ backgroundColor: "olive" }}>Olive</button>
            <button onClick={() => setColor("black")} className="outline-none px-4 rounded-full text-white" style={{ backgroundColor: "black" }}>black</button>
            <button onClick={() => setColor("white")} className="outline-none px-4 rounded-full" style={{ backgroundColor: "white" }}>white</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
