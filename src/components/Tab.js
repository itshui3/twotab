import './_tab.css'
import React, { useReducer, useEffect } from 'react'

const applyBoxShadow = {
    boxShadow: "1px 1px 0px 0px lightgrey",
    backgroundColor: "grey"
}

const ACTION = {
    SWAPCSS: 'swapcss'
}

const circleCssReducer = (state, { type, payload }) => {

    switch(type) {
        case ACTION.SWAPCSS:

            if (payload) {
                return { ...applyBoxShadow }
            } else {
                return {}
            }

        default:
            return state
    }

}

function Tab({ pressed, clickHelper }) {

    const [pressedCSS, dispatch] = useReducer(circleCssReducer, applyBoxShadow)

    useEffect(() => {
        dispatch({ type: ACTION.SWAPCSS, payload: pressed })
    }, [pressed])

return (
<>
    <div className='tab_cont'>
        <div className='tab_circle'  
        style={pressedCSS}
        onClick={() => !pressed ? clickHelper() : null}
        ></div>
    </div>
</>
)
}

export default Tab
