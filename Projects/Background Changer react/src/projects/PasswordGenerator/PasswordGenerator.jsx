import React, { useCallback, useState } from 'react'

function PasswordGenerator() {

    const [length, setlength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [CharAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState("");

    const passwordGerator = useCallback(() => {
        let pass = "";  //The current password and updated one too.
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXZYabcdefghijklmnopqrstuvwxzy";  //This will hold our pass detail.

        if (numberAllowed) {
            str = str + "0123456789";
        }
        if (CharAllowed) {    //See if sir change this part
            str += "~!@#$%^&*()_+";
        }

        for (let i = 1; i <= array.length; i++) {    //For itrating it till the length
            let char = parseInt(Math.random() * str.length + 1);    //if this will create problem I will use math.floor.
            pass = str.charAt(char);    //Pass is defined above
        }

        setPassword(pass);

    }, [length, numberAllowed, CharAllowed, password]); // Hitesh sir will might have problem either with set or normal state.

    return (
        <>
            <h1 className='text-4xl text-green-500'>Password Ganerator</h1>
        </>
    )
}

export default PasswordGenerator