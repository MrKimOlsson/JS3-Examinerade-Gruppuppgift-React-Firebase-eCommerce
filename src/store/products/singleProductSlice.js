import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import productsService from "./productsService"

const initialState = {
  product: null,
  error: null,
  loading: false
}


export const getProductById = createAsyncThunk('singleProduct/getById', async (id, thunkAPI) => {
  try {
    return await productsService.getByIdAsync(id)
  } catch (err) {
    console.log(err.message)
    return thunkAPI.rejectWithValue(err.message)
  }
})


export const singleProductSlice = createSlice({
  name: 'singleProduct',
  initialState,
  reducers: {
    clearProduct: (state) => {
      state.product = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductById.pending, (state) => {
        state.loading = true
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.loading = false
        state.product = action.payload
        state.error = null
      })
      .addCase(getProductById.rejected, (state, action) => {
        state.loading = false
        state.product = null
        state.error = action.payload
      })
  }
})


export const { clearProduct } = singleProductSlice.actions

export default singleProductSlice.reducer