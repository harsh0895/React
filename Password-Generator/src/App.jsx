import { useState, useCallback, useEffect } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [Password, setPassword] = useState("");

  // usecallback() hooks
  const PasswordGeneratror = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // if numbers are allowed
    if( numAllowed) {str += "0123456789"}
    // if charaters allowed
    if( charAllowed) {str += "!@#$%^&*"}
    for( let i=1 ; i <= length; i++ ){
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);

  }, [ length, numAllowed, charAllowed, setPassword ]);

  useEffect(() => {
      PasswordGeneratror();
  }, [length, numAllowed, charAllowed, PasswordGeneratror])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 
      text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center py-1 my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
                  value={Password}
                  className='outline-none w-full py-1 px-3'
                  placeholder='password'
                  readOnly />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input type="range"
              min={6}
              max={20}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setLength(e.target.value)}} />
              <label>Length: {length}</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input type="checkbox"
              defaultChecked={numAllowed}
              id='numberInput'
              onChange={() => {
                setNumAllowed((prev) => !prev); // if prev=true then !prev=false
              }} />
              <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input type="checkbox"
              defaultChecked={charAllowed}
              id='numberInput'
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }} />
              <label htmlFor="numberInput">Characters</label>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
