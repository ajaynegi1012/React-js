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
    
  }, [length, numAllowed, charAllowed, setPassword])

  return (
    <>
      <h3 className="text-4xl text-center text-white ">PasswordGenerator</h3>
    </>
  )
}

export default PasswordGenerator