import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import categoryReducer from "./categorySlice"

const store = configureStore({
  reducer: {
    category: categoryReducer,
  }
})

export default store
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>