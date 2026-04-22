import React, { useState } from 'react'

const Task = () => {

    let [counter, setCounter] = useState(12);

    return (
        <>
            <h1>Chai aur Code</h1>
            <h3>Counter Value : {counter}</h3>

            <button>Add Value</button>
            <button>Remove Value</button>
        </>
    )
}

export default Task