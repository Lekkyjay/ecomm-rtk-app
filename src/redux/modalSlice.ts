import { createSlice } from '@reduxjs/toolkit'
import { ICart, IModalState } from '../utils/interfaces'

const initialState: IModalState = {
  data: {} as ICart,
  isModalVisible: false
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModalData(state, action){
      state.data = action.payload
    },
    setIsModalVisible(state, action){
      state.isModalVisible = action.payload
    }
  }
})

export const { setModalData, setIsModalVisible} = modalSlice.actions
export default modalSlice.reducer

