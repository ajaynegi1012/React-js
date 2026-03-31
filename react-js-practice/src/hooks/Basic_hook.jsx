import React, { useState } from 'react'

export default function Basic_hook() {  //hooks are for UI updation.    

    let [counter, setCounter] = useState(15,); //first one is the variable name and second is updated state.

    // let counter = 5;

    let addbtn = () => {
        // console.log("clicked", counter);
        //Assignment:
        if(counter < 20){
            counter = counter + 1;
            setCounter(counter); 
        }
        else{
            counter;
        }
        // counter = counter + 1;
        // setCounter(counter); 
        // setCounter(counter + 1); another way

    }

    let removeVal = () => {
        if(counter > 0){
            counter = counter - 1;
            setCounter(counter); 
        }
        else{
            counter;
        }
        // counter = counter - 1;
        // setCounter(counter);
    }

    return (
        <div>
            {/* This app is all about basic hooks. */}
            <h2>Counter Value : {counter}</h2>
            <button onClick={addbtn}>Increase</button>
            <br />
            <button onClick={removeVal}>Decrease</button>
        </div>
    )
}
