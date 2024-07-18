import React, { useEffect } from 'react'
import me from '../assets/images/me.png'
import { FaArrowDown } from "react-icons/fa";
import About from './About';
import Portfolio from './Portfolio';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Typed from 'typed.js';
import Reviews from './Reviews';
import Contact from './Contact';
import { Link } from 'react-scroll';
import Footer from '../Components/Footer';

function Home() {


  useEffect(()=>{
    window.scrollTo(0, 0);
    var typed = new Typed('.auto-type', {
      strings: ['MERN Stack Developer','NodeJs Developer'],
      typeSpeed: 50,
      backSpeed:50,
      loop:true

      
    });
    return () => {
      typed.destroy();
    };

  },[])

  return (
    
    <div>
    <section name='Home'>
    <div className='grid grid-cols-1 md:flex w-full  min-h-screen  text-white items-center justify-center'>
<div className=' text-center md:text-start mt-20 md:w-1/2  px-5 md:mt-16 '>
<h1 className='text-3xl md:text-7xl '>Hi,👋 </h1>
<h1 className='text-3xl md:text-7xl mt-2'>I'm Iftikhar Ali</h1>
<h1 className='text-xl md:text-4xl mt-2 md:mt-5'>I'm a <span className='auto-type text-green-500 font-bold'></span></h1>
<p className='text-sm mt-5  md:text-xl text-gree text-zinc-500'>Get regular progress updates on the projects <br></br>
Get the best quality of work delivered on time , before time
<br></br>
Get more that expected
</p>
<div className='mt-4 flex w-full justify-center md:justify-start gap-2'>
<span className='text-xl md:text-2xl text-green-500  cursor-pointer hover:scale-125 hover:duration-100 '><FaFacebook /></span>
<span className='text-xl md:text-2xl text-green-500  cursor-pointer hover:scale-125 hover:duration-100'><FaInstagram/></span>
<span className='text-xl md:text-2xl text-green-500 cursor-pointer hover:scale-125 hover:duration-100'><FaLinkedin /></span>
</div>
<button className='text-sm md:text-xl mt-2 md:mt-5 px-5 py-2 rounded-lg border-2 border-green-500 font-bold text-green-700 hover:bg-green-500 hover:scale-110 hover:ease-in-out hover:duration-150 hover:text-zinc-900'>Portfolio </button>

</div> 
<div className='md:w-1/2   justify-center h-full flex  '>
  <img src={me} alt="" className=' h-[20rem] md:h-[37rem] xl:h-[50rem]  ' />
  <Link
      activeClass="active"
      to="About"
      smooth={true}
      offset={-20}
      duration={500}
    >
      <span className='text-white absolute top-[90%] right-12 rounded-full cursor-pointer px-1 py-1 border-2'><FaArrowDown size={30} /></span>
    </Link>
  </div>
  </div>
    </section>
      
          <section name='About'>
          <About/>
          </section>
     
<section name = 'Portfolio'>

<Portfolio/>
</section>

<hr />
<section name='Reviews'>

<Reviews/>

</section>
<hr />
<section name='Contact'>
<Contact/>
</section>

<Footer/>    
    </div>
  )
}
<script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>

export default Home