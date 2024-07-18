import React, { useEffect } from 'react'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function Messagedisplay({showToast}) {
    const notify = () =>{
        toast.success("Suceesful");  
    } 
useEffect(()=>{
    if(showToast){
notify()
    }
},[showToast])
  return (
<ToastContainer/>
  )
}

export default Messagedisplay