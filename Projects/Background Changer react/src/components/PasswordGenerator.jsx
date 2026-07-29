import React, { useCallback, useState } from 'react'

function PasswordGenerator() {

  const [length, setLength] = useState(6);  //For length feild
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("password");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTWXZYabcdefgijklmnopqrstwxyz";
    if (numAllowed) {
      str = str + "0123456789";
    }
    if (charAllowed) {
      str = str + "!@#$%^&*-_+=[]{}`~";
    }

    for (let i = 1; i < array.length; i++) {
      let char = Math.floor(Math.random() * str.length() + 1);  //+1 is because as index start with 0.
      pass = str.charAt(char);
    }

    setPassword(pass);

  }, [length, numAllowed, charAllowed, setPassword])

  return (
    <>
      <div className='w-full max-w-md mx-auto rounded-lg px-4 my-8 text-black bg-gray-700 text-center text-4xl'>
        <h1 className='text-white' >Password Generator</h1>
        <div className='flex shadow overflow-hidden'>
          <input
            type="text"
            value={password}
            className='outline-none w-full p-3 rounded-lg my-4 bg-white' //Y : top and bottom // x : left and right
            placeholder='password'
            readOnly //No changes can be done.
          />
          <button className='outline-none bg-blue-600 text-white shrink-0 px-3 py-0.5 my-4 rounded' >copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length: {length}</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default PasswordGenerator