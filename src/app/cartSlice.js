import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    totalQuantity: 0
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.products.find((p) => p.id === product.id);

      if (existingProduct) {
        existingProduct.quantity += product.quantity;
      } else {
        state.products.push(product);
      }

      state.totalQuantity += product.quantity;
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
        state.totalQuantity -= product.quantity;
        product.quantity = quantity;
        state.totalQuantity += quantity;
      }
    },
    resetCart: (state) => {
      state.products = [];
      state.totalQuantity = 0;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, resetCart } = cartSlice.actions;

export default cartSlice.reducer;

