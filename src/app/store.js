import { configureStore } from '@reduxjs/toolkit'

import productsReducer from '../store/products/productsSlice'
import singleProductReducer from '../store/products/singleProductSlice'
import cartSlice from './cartSlice'
import authReducer from './reducers'

export const store = configureStore({
  reducer: {
    products: productsReducer,
    singleProduct: singleProductReducer,
    auth: authReducer,
    cart: cartSlice
  }
})