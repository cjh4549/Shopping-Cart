// state {
//     total: 0,
//     quantity: 0, //cart.length?
//     cart: [{...}, {...}, {...}] <- push all the API FETCHED objects into this cart
// }

const reducer = (state, action) => {    
    if (action.type === "ADD_CART") {
        return {
            ...state,
            cart: [action.payload]
        }
    }
    else if (action.type === "CLEAR_CART") {
        return {
            ...state,
            cart: []
        }
    } else if (action.type === "REMOVE_ITEM"){
        const filteredCart = state.cart.filter((item) => (
           item.id !== action.payload 
        ));
        return {
            ...state,
            cart: filteredCart
        }
    }  else if (action.type === "GET_TOTAL") {
        return {
            state
        }
    }
    
    else {
        throw new Error ('no matching action type found')
    }

}

export default reducer;