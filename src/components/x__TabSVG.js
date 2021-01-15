import './_tab.css'
import React from 'react'

function Tab({ pressed, clickHelper }) {

return (
<>
    <div className='tab_cont'>
        <svg height="20" width="20"
        onClick={clickHelper}
        className='tab_svg'>
            <circle className='tabSvg_circle'
            cx="10" cy="10" r="10"
            stroke="black"
            
            fill={`${pressed?"black":"none"}`}
            ></circle>
        </svg>
    </div>
</>
)
}

export default Tab
