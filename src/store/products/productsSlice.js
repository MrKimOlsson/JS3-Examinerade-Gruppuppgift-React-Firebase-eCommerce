// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productsService from "./productsService";

const initialState = {
  products: [],
  error: null,
  loading: false
}

export const addProduct = createAsyncThunk('product-list/add', async (productData, thunkAPI) => {
  try {
    return await productsService.createProduct(productData)
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message)
  }
})
export const getProducts = createAsyncThunk('product-list/getAll', async (_, thunkAPI) => {
  try {
    return await productsService.getAllAsync('products')
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message)
  }
})

export const productsSlice = createSlice({
  name: 'Product-list',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addProduct.pending, (state) => {
        state.loading = true
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.products = [...state.products, action.payload]
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })



      .addCase(getProducts.pending, (state) => {
        state.loading = true
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.products = action.payload
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  }
})

export default productsSlice.reducer
// import productsService from "./productsService";

// const initialState = {
//   products: [],
//   error: null,
//   loading: false
// }

// export const addProduct = createAsyncThunk('product-list/add', async (productData, thunkAPI) => {
//   try {
//     return await productsService.createProduct(productData)
//   } catch (err) {
//     return thunkAPI.rejectWithValue(err.message)
//   }
// })
// export const getProducts = createAsyncThunk('product-list/getAll', async (_, thunkAPI) => {
//   try {
//     return await productsService.getAllAsync('products')
//   } catch (err) {
//     return thunkAPI.rejectWithValue(err.message)
//   }
// })

// export const productsSlice = createSlice({
//   name: 'Product-list',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(addProduct.pending, (state) => {
//         state.loading = true
//       })
//       .addCase(addProduct.fulfilled, (state, action) => {
//         state.loading = false
//         state.error = null
//         state.products = [...state.products, action.payload]
//       })
//       .addCase(addProduct.rejected, (state, action) => {
//         state.loading = false
//         state.error = action.payload
//       })



//       .addCase(getProducts.pending, (state) => {
//         state.loading = true
//       })
//       .addCase(getProducts.fulfilled, (state, action) => {
//         state.loading = false
//         state.error = null
//         state.products = action.payload
//       })
//       .addCase(getProducts.rejected, (state, action) => {
//         state.loading = false
//         state.error = action.payload
//       })
//   }
// })

// export default productsSlice.reducer