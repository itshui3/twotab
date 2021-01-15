import React from 'react'

function Tab({ pressed, clickHelper }) {

    const fillIn = pressed ? "black" : "white"

return (
<>

    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"
    onClick={clickHelper}>
        <circle 
        cx="50" cy="50" r="50"
        stroke="black"
        fill={fillIn}></circle>
    </svg>

</>
)
}

export default Tab
