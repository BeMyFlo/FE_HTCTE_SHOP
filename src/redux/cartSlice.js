import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cartProducts',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            console.log("product: ", product);
            const existing = state.items.find(item => item._id === product._id);
            if (existing) {
                existing.quantity += product.quantity;
            } else {
                state.items.push(product);
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
