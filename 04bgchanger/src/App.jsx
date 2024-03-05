import { useState } from "react"

function App() {
  const [color, setColor] = useState('olive');

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-9 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-[#a3a2a2] px-3 py-2 rounded-xl">
            <button onClick={ () => setColor('red') } className="py-1 rounded-full text-white shadow-md px-4 outline-none" style={{backgroundColor: "red"}}>Red</button>
            <button onClick={ () => setColor('green') } className="py-1 rounded-full text-white shadow-md px-4 outline-none" style={{backgroundColor: "green"}}>Green</button>
            <button onClick={ () => setColor('Blue') } className="py-1 rounded-full text-white shadow-md px-4 outline-none" style={{backgroundColor: "Blue"}}>Blue</button>
            <button onClick={ () => setColor('Yellow') } className="py-1 rounded-full text-black shadow-md px-4 outline-none" style={{backgroundColor: "Yellow"}}>Yellow</button>
            <button onClick={ () => setColor('orange') } className="py-1 rounded-full text-white shadow-md px-4 outline-none" style={{backgroundColor: "orange"}}>Orange</button>
            <button onClick={ () => setColor('pink') } className="py-1 rounded-full text-black shadow-md px-4 outline-none" style={{backgroundColor: "pink"}}>Pink</button>
            <button onClick={ () => setColor('black') } className="py-1 rounded-full text-white shadow-md px-4 outline-none" style={{backgroundColor: "black"}}>Black</button>
            <button onClick={ () => setColor('white') } className="py-1 rounded-full text-black shadow-md px-4 outline-none" style={{backgroundColor: "white"}}>White</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
