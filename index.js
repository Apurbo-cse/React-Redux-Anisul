const { createStore, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");

// products constants
const GET_PRODUCTS = "GetProducts";
const ADD_PRODUCT = "AddProduct";


// Product States
const initialProductState = {
    products: ["suger", "Salt"],
    numberofProducts: 2
}


// Products actions
const getProduct = () => {
    return {
        type: GET_PRODUCTS,
    }
}

const AddProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}


// productReducer
const productReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
            }

        case ADD_PRODUCT:
            return {
                products: [...state.products, action.payload],
                numberofProducts: state.numberofProducts + 1
            }

        default:
            return state;
    }
}





// store
const store = createStore(productReducer, applyMiddleware(logger));
store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(getProduct());
store.dispatch(AddProduct("pen"));