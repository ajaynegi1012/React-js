import { useState } from "react"

function App() {
  const [color, setColor] = useState("Olive");

  return (
    <>
      <div className="w-full h-screen"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex-wrap justify-between
        bottom1 : 10
        flex "></div>
      </div>
    </>
  )
}

export default App
