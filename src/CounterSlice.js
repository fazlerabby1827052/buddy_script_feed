import { createSlice } from '@reduxjs/toolkit'
import { getFromLocalStorage, setToLocalStorage } from './utils/localstorage'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: getFromLocalStorage("post"),
  },
  reducers: {
    setpost:(state,action)=>{
      state.value=action.payload,
      setToLocalStorage("post",action.payload);
    },
    

  }
})

// Action creators are generated for each case reducer function
export const {  } = counterSlice.actions

export default counterSlice.reducer