// Defining constant
const INCREMENT = 'Increment';
const DECREMENT = 'Decrement';


// state
const initialCounterState = {
    count: 0,
}


// action - Object - type, payload

const IncrementCounterAction = () => {
    return {
        type: INCREMENT,
    }
}

const DecrementCounterAction = () => {
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
