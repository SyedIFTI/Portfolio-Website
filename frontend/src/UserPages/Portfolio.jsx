import React, { useRef } from 'react'
import project1 from '../assets/images/project1.png'
import project2 from '../assets/images/project2.png'
import project3 from '../assets/images/project3.png'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { DiMongodb } from "react-icons/di";

function Portfolio() {


  return (
    <>
    <div className='w-full text-white mb-4 md:mb-0 flex   items-center justify-center flex-col  md:h-screen'>
<h1 className='mt-32 md:mt-0 text-center text-3xl md:text-5xl tracking-wider font-bold'>Portfolio</h1>
   <div className='grid gap-7 overflow-hidden md:gap-4 md:grid-cols-3 p-10'>
<div  id='pr1' className=' w-full rounded-lg border cursor-pointer hover:scale-105 duration-200 hover:shadow-green-500 shadow-md border-slate-600 overflow-hidden'>
<div>
<img src={project1} alt="" />
</div>
<h1 className='text-center mt-3 text-green-500 text-xl font-semibold'>Portfolio Webiste</h1>
<h1 className='mt-1 text-center text-sm tracking-widest'>Technologies Used</h1>
<div className='flex gap-4 justify-center mt-3'>
<FaReact/><FaNodeJs/><BiLogoTailwindCss/><DiMongodb/>
</div>
<div className='flex justify-between items-center py-2'>
  <h1 className='text-sm ml-2 text-zinc-600'>MERN Stack Project</h1>
<a href="#" className='inline-block mt-2 mr-2 text-sm  text-zinc-600  hover:text-green-500 duration-100 '>View Project</a>

</div>
</div>
<div  className='w-full rounded-lg border cursor-pointer hover:scale-105 duration-200 hover:shadow-green-500 shadow-md border-slate-600 overflow-hidden'>
<div>
<img src={project2} alt="" />
</div>
<h1 className='text-center mt-3 text-green-500 text-xl font-semibold'>Online Books Selling Webiste</h1>
<h1 className='mt-1 text-center text-sm tracking-widest'>Technologies Used</h1>
<div className='flex gap-4 justify-center mt-3'>
<FaNodeJs/><BiLogoTailwindCss/><DiMongodb/>
</div>
<div className='flex justify-between items-center py-2'>
  <h1 className='text-sm ml-2 text-zinc-600'>NodeJs Project</h1>
<a href="#" className='inline-block mt-2 mr-2 text-sm  text-zinc-600  hover:text-green-500 duration-100 '>View Project</a>

</div>
</div>
<div  className='w-full rounded-lg border cursor-pointer hover:scale-105 duration-200 hover:shadow-green-500 shadow-md border-slate-600 overflow-hidden'>
<div>
<img src={project3} alt="" />
</div>
<h1 className='text-center mt-3 text-green-500 text-xl font-semibold'>Post Creating Application</h1>
<h1 className='mt-1 text-center text-sm tracking-widest'>Technologies Used</h1>
<div className='flex gap-4 justify-center mt-3'>
<FaNodeJs/><BiLogoTailwindCss/><DiMongodb/>
</div>
<div className='flex justify-between items-center py-2'>
  <h1 className='text-sm ml-2 text-zinc-600'>NodeJs Project</h1>
<a href="#" className='inline-block mt-2 mr-2 text-sm  text-zinc-600  hover:text-green-500 duration-100 '>View Project</a>

</div>
</div>
   </div>
   <h1 className=' text-zinc-600 text-sm'>More projects are comming soon 😇 </h1>
    </div>
    </>
  )
}

export default Portfolio