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
      const productId = action.payload.id;
      const existingProductIndex = state.products.findIndex((product) => product.id === productId);

      if (existingProductIndex !== -1) {
        const removedProduct = state.products[existingProductIndex];
        state.products.splice(existingProductIndex, 1);
        state.totalQuantity -= removedProduct.quantity;
      }
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

