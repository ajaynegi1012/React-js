import React, { useCallback, useState } from 'react'

function PasswordGenerator() {

  const [length, setLength] = useState(8);  //For length feild
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTWXZYabcdefgijklmnopqrstwxyz";
    if(numAllowed){
      str = str + "0123456789";
    }
    if(charAllowed){
      str = str + "!@#$%^&*-_+=[]{}`~";
    }

    for (let i = 1; i < array.length; i++) {
      let char = Math.floor(Math.random() * str.length()+1);  //+1 is because as index start with 0.
      pass = str.charAt(char);  
    }

    setPassword(pass);
    
  }, [length, numAllowed, charAllowed, setPassword])

  return (
    <>
      <div className='w-full max-w-md mx-auto rounded-lg p-4 my-8 text-white bg-gray-400 text-center text-4xl'>test</div>
    </>
  )
}

export default PasswordGenerator