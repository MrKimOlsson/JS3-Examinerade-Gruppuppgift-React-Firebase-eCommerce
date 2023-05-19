import { configureStore } from '@reduxjs/toolkit'

import productsReducer from '../store/products/productsSlice'
import singleProductReducer from '../store/products/singleProductSlice'

export const store = configureStore({
  reducer: {
    products: productsReducer, 
    singleProduct: singleProductReducer
  }
})