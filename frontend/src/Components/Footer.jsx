import React from 'react'
import { IoMdMail } from "react-icons/io";
function Footer() {
  return (
    
    <footer class="text-gray-400  border-t bg-black  body-font">
  <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a class="flex title-font font-medium items-center md:justify-start justify-center text-white">
      
      <span class="ml-3 text-2xl tracking-widest text-green-500 font-bold">Ifti.</span>
    </a>
     <div className='ml-10'>
     <a href="#" className=' flex items-center  '><span className='text-green-500 mr-2'><IoMdMail size={20}/></span>syedifti0245@gmail.com</a>
     
        </div> 
    <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a class="text-green-500">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
      
      <a class="ml-3 text-green-500">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
      <a class="ml-3 text-green-500">
        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
    </span>
   
  </div>
  <div className='w-full py-2 flex bg-zinc-900 justify-center'>
    <p class="text-gray-400 text-sm text-center sm:text-left">© 2024 Syed Iftikhar Ali —</p>
<a href="#" className='text-sm'>@SyedAli</a>
    </div>
</footer>
  )
}

export default Footer