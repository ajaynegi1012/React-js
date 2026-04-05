import Card from "./Card"
import data from "./data"

function App() {

  return (
    <>
      <h1 className="bg-green-400 text-black mb-4">Tailwind + Vite</h1>

      <Card data={data} />
      {/* <Card data={data2} /> */}
    </>
  )
}

export default App
