// Defining constant
const INCREMENT ='Increment';
const DECREMENT ='Decrement';
const ADD_USER ='Add_User';


// state
const initialCounterState = {
    count:0,
}

const initialUsersState = {
    users:[  {name: 'John'}  ]
}




// action - Object - type, payload

// Intcrement Counter
const IncrementCounterAction =() =>{
    return {
        type: INCREMENT,
    }
}


// Decrement Counter
const DecrementCounterAction =() =>{
    return {
        type: DECREMENT,
    }
}


// add User 
const AddUser =() =>{
    return {
        type: ADD_USER,
        payload:{name:"Apurbo"}
    }
}

