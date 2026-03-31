import React, { useState } from 'react'

export default function Basic_hook() {  //hooks are for UI updation.    

    cosnt[counter, setCounter] = useState(15,); //first one is the variable name and second is updated state.

    // let counter = 5;

    let addbtn = () => {
        console.log("clicked", counter);

        counter = counter + 1;

    }

    return (
        <div>
            {/* This app is all about basic hooks. */}
            <h2>Counter Value : {counter}</h2>
            <button onClick={addbtn}>Increase</button>
            <br />
            <button>Decrease</button>
        </div>
    )
}
