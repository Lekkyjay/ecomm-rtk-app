import { createSlice, Dispatch } from '@reduxjs/toolkit'
import { BASE_URL } from '../utils/apiURL'
import { IProductState } from '../utils/interfaces'
import { STATUS } from '../utils/status'

const initialState: IProductState = {
  data: [],
  status: STATUS.IDLE
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts(state, action){
      state.data = action.payload
    },
    setStatus(state, action){
      state.status = action.payload
    },
  },
})

export const {setProducts, setStatus} = productSlice.actions
export default productSlice.reducer

export const fetchProducts = () => {
  return async function fetchProductThunk(dispatch: Dispatch){
    dispatch(setStatus(STATUS.LOADING))
    try{
      const response = await fetch(`${BASE_URL}products`)
      const data = await response.json()
      dispatch(setProducts(data))
      dispatch(setStatus(STATUS.IDLE))
    } catch(error){
      dispatch(setStatus(STATUS.ERROR))
    }
  }
}
