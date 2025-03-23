import { createSlice } from '@reduxjs/toolkit'
import { getFromLocalStorage, getFromLocalStoragetwo, setToLocalStorage } from './utils/localstorage'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    allpost: getFromLocalStorage("post"),
    alluser:getFromLocalStorage("user"),
    currentUser:getFromLocalStoragetwo("currentUser"),
  },
  reducers: {
    setpost:(state,action)=>{
      setToLocalStorage("post",action.payload);
      state.allpost=action.payload;
    },
    setuser:(state,action)=>{
      setToLocalStorage("user",action.payload);
      state.alluser=action.payload;
    },
    setcurrentuser:(state,action)=>{
      setToLocalStorage("currentUser",action.payload);
      state.currentUser=action.payload;
    },
    removecurrentuser:(state)=>{
      localStorage.removeItem("currentUser");
      state.currentUser=null;
    }
    

  }
})



// Action creators are generated for each case reducer function
export const { setpost,setuser,setcurrentuser,removecurrentuser } = counterSlice.actions

export default counterSlice.reducer