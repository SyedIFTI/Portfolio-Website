import React from 'react'

import { useState } from 'react';

import { Link } from 'react-scroll';
import {motion, useScroll, useMotionValueEvent} from 'framer-motion'
function Navbar() {

  const links = [
    {
      id:1,
      name : "Home",
    path : "/"
    },
    {
      id:2,
      name : "About",
    path : "/about"
    },
    {
      id:3,
      name : "Portfolio",
    path : "/portfolio"
    },
    {
      id:4,
      name : "Reviews",
    path : "/reviews"
    },
    {
      id:5,
      name:"Contact",
      path:"/contact"
    }
  ]
  const [hidden,sethidden] = useState(false)
  const {scrollY} = useScroll()
  useMotionValueEvent(scrollY,'change',(latest)=>{
    const prevvalue = scrollY.getPrevious()
    if(latest>prevvalue && latest>150){
      sethidden(true)
    }
    else{
      sethidden(false)
    }
  })
  return (
  <>
<motion.nav
variants={{
  visible:{y:0},
  hidden:{y:"-100%"}
}}
animate={hidden ? "hidden":"visible"}
transition={{duration:0.35,ease:"easeInOut"}}
className='fixed flex  w-full justify-between items-center bg-black px-5 py-6 '>
<div className='flex  justify-center items-center'>
<h1 className='text-green-500 text-3xl tracking-widest font-bold'>Ifti.</h1>
</div>
<ul className= 'flex  text-sm items-center justify-center text-zinc-600'>
      {links.map((item) => (
            <Link  key={item.id}
            activeClass="active" 
            to={item.name} 
            spy={true} 
            smooth={true} 
            offset={0} 
            duration={500} 
           
          className='ml-4 cursor-pointer hover:text-green-500 hover:scale-125 duration-75 '
          >
            {item.name}
          </Link>

      ))}
    </ul>

</motion.nav>
     
         </>
  )
}

export default Navbar