import React, { useRef, useState } from 'react'
import Contactimage from '../assets/images/contact.png'
import axios from 'axios'
import Messagedisplay from '../Components/Messagedisplay';
function Contact() {
const [name,setname]=useState("")
const [email,setemail]=useState("")
const [contact,setcontact]=useState("")
const [message,setmessage]= useState("")
const [toast , settoast] = useState(false)


const handelInput = async(e)=>{
  e.preventDefault();
  const res =await axios.post('http://localhost:3000/sendmessage',{
    name,
    email,
    contact,
    message
  })
  if(res){
    settoast(true)
 setname ( "")
 setemail ( "")
 setcontact ( "")
 setmessage("")
}
  else{
    settoast(false)
  }

}  
return (
    <>
<Messagedisplay showToast={toast}/>
    <div className=' w-full p-10 gap-5 md:h-screen  grid grid-cols-1 gap- md:flex  md:flex-row justify-center  text-white items-center'>
<div className='md:w-1/2 '>
<div className=' flex flex-col justify-center items-center'>
<img src={Contactimage} className='h-80' alt="" />
</div>
<div >
<h1 className='text-3xl md:text-4xl'>Get Free Consultation</h1>
<h1 className='text-2xl mt-2'>What's Next</h1>
<div className='leading-10'>
<h1 className=''>✔  We will Contact you with in 24hrs</h1>
<h1>✔  Receive personalized solutions tailored for you</h1>
<h1>✔  Let'start your journey to success</h1>
<button className='px-5 mt-2 mb-5 md:mb-0 md:mt-0  rounded-lg border-2 border-green-500 font-bold text-green-700 hover:bg-green-500 hover:scale-110 hover:ease-in-out hover:duration-150 hover:text-zinc-900'>Get Started </button>


</div>
</div>
</div>
<div className='md:w-1/2 h-full'>
<h1 className="text-3xl font-bold  text-center text-white">Contact Us</h1>
<form  autoComplete='off' onSubmit={handelInput} className=" p-6 rounded-lg shadow-md">
        <div className="mb-3">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 bg-black py-2 border border-green-500 rounded-lg focus:outline-none "
            required
            onChange={(e)=>setname(e.target.value)}
         value={name}
          
         />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
    
          value={email}
            onChange={(e)=>setemail(e.target.value)}
            className="w-full px-3 bg-black py-2 border border-green-500 rounded-lg focus:outline-none "            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="contact" className="block text-gray-700 font-bold mb-2">
            Contact
          </label>
          <input
            type="text"
            id="contact"
            name="contact"

value={contact}
            onChange={(e)=>setcontact(e.target.value)}
            className="w-full px-3 bg-black py-2 border border-green-500 rounded-lg focus:outline-none "            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full px-3 bg-black py-2 border border-green-500 rounded-lg focus:outline-none "            rows="5"
          
            value={message}
            onChange={(e)=>setmessage(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="text-center">
        <button  className='px-5 py-2 rounded-lg border-2 border-green-500 font-bold text-green-700 hover:bg-green-500 hover:scale-110 hover:ease-in-out hover:duration-150 hover:text-zinc-900'>Submit</button>
        </div>
      </form>
</div>
    </div>
    </>
  )
}

export default Contact