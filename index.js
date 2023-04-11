// state - count:0
// action - increment, decrement, reset
// reducer
// store

const { createStore } = require("redux");


const INCREMENT = 'Increment';
const DECREMENT = 'Decrement';
const RESET = 'Reset';

const initialState = {
    count: 0
}

const incrementActions = () => {
    return {
        type: INCREMENT
    }
}

const decrementActions = () => {
    return {
        type: DECREMENT
    }
}

const resetActions = () => {
    return {
        type: RESET
    }
}


// Creating Reducer
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }

        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }

        case RESET:
            return {
                ...state,
                count: 0
            }


        default:
            state;
    }
}


// store

const store = createStore(counterReducer)

store.subscribe(() =>{
    console.log('Object>>', store.getState())
})

store.dispatch(incrementActions())
store.dispatch(incrementActions())
store.dispatch(incrementActions())
store.dispatch(decrementActions())
store.dispatch(resetActions())
store.dispatch(incrementActions())