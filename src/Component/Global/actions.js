import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    
    orderDetails:[],
    cart: [],
    quantity: 0,
    totalPrice: 0,
    details:null
}

const actions = createSlice({
  name: "ajbread",
  initialState,
    reducers: {
        addToCart: (state, {payload}) =>
        {
            const check = state.cart.findIndex((el) => el._id === payload._id)
            
            if (check >= 0)
            {
                state.cart[check].quantity += 1; 
            } else
            {
               state.cart.push({...payload, quantity:1}) 
            }

            state.quantity += 1;

            state.totalPrice += payload.quantity * payload.price;
        },

        addToDeatils: (state, {payload}) =>
        {
            state.orderDetails = payload
        }, 
        removeCart: (state, {payload}) =>
        {
            let check = state.cart.findIndex((el) => el._id === payload._id )
            
            if (state.cart[check].quantity > 1)
            {
                state.cart[check].quantity -= 1
            } else
            {
               state.cart = state.cart.filter( (item) =>  item._id !== payload._id ) 
            }

            state.quantity -= 1
            state.totalPrice -= payload.price
            
        }


    
  }
});

export const {addToCart, addToDeatils,removeCart} = actions.actions

export default actions.reducer