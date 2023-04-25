export const cartReducer = (state, action) => {
    switch (action.type) {
        case "Get_Products":
            return {
                ...state,
                products: action.payload
            }
            break;
        case "Add_To_Cart":
            return {
                ...state,
                cart: [...state.cart, { ...action.payload, qty: 1 }]
            }

            break;
        case "Remove_From_Cart":
            return {
                ...state,
                cart: state.cart.filter((c) => c._id !== action.payload)
            }
            break;

        case "Change_Cart_Qty":
            return {
                ...state,
                cart: state.cart.filter((c) =>
                    c._id == action.payload._id ? (c.qty = action.payload.qty) : c.qty)
            }
        default:
            return state;
    }
}