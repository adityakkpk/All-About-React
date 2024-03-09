import { useState, useCallback, useEffect, useRef } from "react"

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null);

  //useCallback hook
  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numAllowed) str += "0123456789";
    if(charAllowed) str += "!@#$%^&*()_+-{}[]~'";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char)
      
    }
    
    setPassword(pass)

  }, [length, numAllowed, charAllowed, setPassword])

  const copyPasswordToClip = useCallback(()=>{
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(password);
  }, [password])
  
  // useEffect hook
  useEffect(()=>{
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator])


  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 pb-4">
      <h1 className="text-center text-white my-3">Pasword Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text" 
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="password"
          readOnly
          ref={passwordRef}
        />
        <button
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 active:bg-blue-300"
          onClick={()=>{
            copyPasswordToClip();
          }}
        >Copy</button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input 
            type="range" 
            min={6}
            max={25}
            value={length}
            className="cursor-pointer"
            onChange={(e)=> {setLength(e.target.value)}}
          />
          <label htmlFor="">Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input 
            type="checkbox" 
            defaultChecked={numAllowed}
            id="numberInput"
            className="cursor-pointer"
            onChange={()=>{
              setNumAllowed((prev) => !prev)
            }}
          />
          <label htmlFor="">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input 
            type="checkbox" 
            defaultChecked={charAllowed}
            id="numberInput"
            className="cursor-pointer"
            onChange={()=>{
              setCharAllowed((prev) => !prev)
            }}
          />
          <label htmlFor="">Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
