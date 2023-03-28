import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import categoryReducer from "./categorySlice"
import modalReducer from "./modalSlice"
import productReducer from "./productSlice"
import cartReducer from "./cartSlice"

const store = configureStore({
  reducer: {
    category: categoryReducer,
    modal: modalReducer,
    product: productReducer,
    cart: cartReducer
  }
})

export default store
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>