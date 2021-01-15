import './_center.css'
import React, { useReducer } from 'react'

import Tab from './Tab'

import { SWAP, tabReducer } from './_tabReducer'

function TwoTab() {
    const [state, dispatch] = useReducer(tabReducer, { t1: true, t2: false })
return (
<>
<div className='twoTab_cont center'>
    <Tab pressed={state.t1} clickHelper={() => dispatch({ type: SWAP })} />
    <Tab pressed={state.t2} clickHelper={() => dispatch({ type: SWAP })} />
</div>
</>
)
}

export default TwoTab
