import React, { useState } from 'react'

const Task = () => {

    let [counter, setCounter] = useState(1);

    let increaseVal = () => {
        // let updatedVal = counter + 1;
        // setCounter(counter + 1);
        // setCounter(counter + 1);
        // setCounter(counter + 1);
        // setCounter(counter + 1);
        // setCounter(counter + 1);    //This will create a batch with the same work. Then it will consider only one.

        // Solution

        setCounter((previousCounter) => previousCounter + 1);
        setCounter((previousCounter) => previousCounter + 1);
        setCounter((previousCounter) => previousCounter + 1);
        setCounter((previousCounter) => previousCounter + 1);
    }

    let decreaseVal = () => {
        // let updatedVal = counter + 1;
        counter >= 1 ? setCounter(counter - 1) : "";
    }

    return (
        <>
            <h1>Chai aur Code</h1>
            <h3>Counter Value : {counter}</h3>

            <button onClick={increaseVal}>Add Value</button>
            <button onClick={decreaseVal}>Remove Value</button>
        </>
    )
}

export default Task