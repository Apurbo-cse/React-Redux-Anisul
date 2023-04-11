const { createStore } = require("redux")

// Defining constant
const INCREMENT = 'Increment';
const DECREMENT = 'Decrement';


// state
const initialCounterState = {
    count: 0,
}


// action - Object - type, payload

const IncrementCounter = () => {
    return {
        type: INCREMENT,
    }
}

const DecrementCounter = () => {
    return {
        type: DECREMENT,
    }
}


// Create reducer for counter action
const CounterReducer = (state = initialCounterState, action) => {

    switch (action.type) {

        case INCREMENT:
            return{
                ...state,
                count : state.count + 1
            }

        case DECREMENT:
            return{
                ...state,
                count : state.count - 1
            }

        default:
            break;
    }
}



// Store  - getState(), dispatch(), subscribe()
const store = createStore(CounterReducer)


store.subscribe(()=>{
    console.log('object :>> ', store.getState());
})


// dispatch action
store.dispatch(IncrementCounter())

store.dispatch(DecrementCounter())