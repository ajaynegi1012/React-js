import Card from "./Card"
import data from "./data"

function App() {

  return (
    <>
      <h1 className="bg-green-400 text-black mb-4">Tailwind + Vite</h1>

      <Card id={data} />
    </>
  )
}

export default App
