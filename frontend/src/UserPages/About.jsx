import React from 'react'
import aboutme from '../assets/images/about1.jpg'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { DiMongodb } from "react-icons/di";


function About() {
  return (
 <>
 <div className='w-full h-full '>
 <div className='w-full  justify-center md:flex items-center  p-10'>
<div className='md:w-1/2 h-full flex justify-center  '>
<img src={aboutme} className='h-[30rem] rounded-xl mt-10 shadow-green-700 shadow-md' alt="" />
</div>
<div className=' mt-10 md:mt-0 md:w-1/2 h-full md:h-96 md:p-10 p-2 flex flex-col  md:justify-center text-white'>
<h1 className=' md:text-2xl text-zinc-600'>About me</h1>
<h1 className='text-3xl md:text-5xl font-bold'>Who I'm</h1>
<p className='md:text-[18px] text-zinc-400 leading-2'>
I am a MERN stack developer with a strong grasp of frontend and backend technologies such as <span className='text-green-500'>React</span>,<span className='text-green-500'>Node</span>,<span className='text-green-500'> Express</span> and <span className='text-green-500'>MngoDB</span>. Throughout my development journey, I have built many offline and online projects, which have allowed me to enhance my logic-building and problem-solving skills. Don't wait any longer – let me know via email to make your project top-notch.
</p>
<button className='rounded-lg border-2 border-green-500 font-bold text-green-700 hover:bg-green-500 hover:scale-110 hover:ease-in-out hover:duration-150 hover:text-zinc-900 w-1/4 mt-2 py-2'>Get Started</button>
</div>
 </div>
 <div className='  w-full     skills-section py-5  px-5'>
<h1 className='text-center text-5xl font-bold tracking-wide text-white mb-5 '>Skills</h1>
<div className='w-full grid g grid-cols-2  md:flex justify-center mt-10 rounded-md md:rounded-full bg-gradient-to-r from-gray-800 to-zinc-900 border py-5  gap-4'>
<span className=' text-xl text-orange-600 rounded-lg hover:shadow-orange-500 hover:scale-105 hover:duration-200  font-bold cursor-pointer hover:shadow-lg py-1 px-2 text-center'><FaHtml5 size={60}  />HTML</span>
<span className=' text-xl text-blue-600 rounded-lg hover:shadow-blue-600 hover:scale-105 hover:duration-200  font-bold cursor-pointer hover:shadow-lg py-1 px-2 text-center'><FaCss3Alt size={60}  />CSS</span>
<span className=' text-xl text-yellow-400 rounded-lg hover:shadow-yellow-400 hover:scale-105 hover:duration-200  font-bold cursor-pointer hover:shadow-lg py-1 px-2 text-center'><IoLogoJavascript size={60}  />JavaScript</span>
<span className=' text-xl text-cyan-500 rounded-lg hover:shadow-cyan-500 hover:scale-105 hover:duration-200  font-bold cursor-pointer hover:shadow-lg py-1 px-2 text-center '><BiLogoTailwindCss size={60}  />Tailwind</span>
<span className=' text-xl text-blue-700 rounded-lg hover:shadow-blue-700 hover:scale-105 hover:duration-200  font-bold cursor-pointer hover:shadow-lg py-1 px-2 text-center'><FaReact size={60}  />React</span>
<span className=' text-xl text-green-500 rounded-lg hover:shadow-green-500 hover:scale-105 hover:duration-200  font-bold cursor-pointer hover:shadow-lg py-1 px-2 text-center'><FaNodeJs  size={60} />NodeJs</span>
<span className=' text-xl text-green-700 rounded-lg hover:shadow-green-700 hover:scale-105 hover:duration-200  font-bold cursor-pointer hover:shadow-lg py-1 px-2 text-center'><DiMongodb  size={60} />MongoDB</span>
</div>
 </div>
 </div>
 

    
 </>
  )
}

export default About