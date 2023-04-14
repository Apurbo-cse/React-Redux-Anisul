const { createStore, combineReducers } = require("redux");

// products constants
const GET_PRODUCTS = "GetProducts";
const ADD_PRODUCT = "AddProduct";

// cart constants
const GET_CART_ITEMS = "GetCartItems";
const ADD_CART_ITEM = "AddCartItem";


// Product States
const initialProductState = {
    products: ["suger", "Salt"],
    numberofProducts: 2
}


// Cart States
const initialCartSate = {
    cart: ["suger"],
    numberofProducts: 1
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



// Cart actions
const GetCart = () => {
    return {
        type: GET_CART_ITEMS,
    }
}

const AddCart = (product) => {
    return {
        type: ADD_CART_ITEM,
        payload: product
    }
}


// productResource
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


// cartReducer
const cartReducer = (state = initialCartSate, action) => {
    switch (action.type) {
        case GET_CART_ITEMS:
            return {
                ...state,
            }

        case ADD_CART_ITEM:
            return {
                cart: [...state.cart, action.payload],
                numberofProducts: state.numberofProducts + 1
            }

        default:
            return state;
    }
}

const rootReducer = combineReducers({
    productR: productReducer,
    cartR: cartReducer
})

// store
const store = createStore(rootReducer);
store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(getProduct());
store.dispatch(AddProduct("pen"));


store.dispatch(GetCart());
store.dispatch(AddCart("pen"));