import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.products.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
    },
    updateQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const product = state.products.find((product) => product.id === productId);
      if (product) {
        product.quantity = quantity;
      }
    },
    resetCart: (state) => {
      state.products = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, resetCart } =
  cartSlice.actions;

export default cartSlice.reducer;

