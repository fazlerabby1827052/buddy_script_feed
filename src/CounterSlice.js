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
    },
    replysave:(state,action)=>{
      const {obj,com,reply}=action.payload;
      const allpost=state.allpost;
      const postid=allpost.findIndex(post=>post.timeofcreate===obj.timeofcreate);
      if(postid!==-1){
        const allcom=[...allpost[postid].comment];
        const comid=allcom.findIndex(comment=>com.id===comment.id);
        if(comid!==-1){
          allcom[comid].reply.unshift(reply);
        }
      }

      setToLocalStorage("post",allpost);
      state.allpost=allpost;


    },
    

  }
})



// Action creators are generated for each case reducer function
export const { setpost,setuser,setcurrentuser,removecurrentuser,replysave } = counterSlice.actions

export default counterSlice.reducer