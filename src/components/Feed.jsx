import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Post from './Post'
import { getFromLocalStoragetwo } from '../utils/localstorage'
import { useNavigate } from 'react-router-dom';

export default function Feed() {
  const [currentuser,setcurrentuser]=useState(getFromLocalStoragetwo("currentUser"));
  const navigate=useNavigate();
  // const
  console.log(currentuser)
  useEffect(()=>{
    if(currentuser===null){
      navigate('/login');
    }

  },[currentuser])
  
  return (
    <div className='_layout _layout_main_wrapper'>
        <div className="_main_layout">
            <Navbar/>
            <Post/>
        </div>

    </div>
  )
}
