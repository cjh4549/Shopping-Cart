const reducer = (state, action) => {
    if (action.type === "ADD") {
        const newCart = [...state.cart, action.payload];
        return {
            ...state,
            cart: newCart
        }
    } else if (action.type === "CLEAR") {
        return {
            ...state,
            cart: []
        }
    }
    else {
        throw new Error ('no matching action type found')
    }

}

export default reducer;