const SWAP = 'swap'

const tabReducer = (state, action) => {

    switch(action.type) {
        
        case SWAP:
            return {
                t1: !state.t1,
                t2: !state.t2
            }

        default:
            return state

    }
}

export {
    SWAP,
    tabReducer
}