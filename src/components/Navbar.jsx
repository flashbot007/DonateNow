import React from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useState , useEffect } from 'react';
import "./Navbar.css"

gsap.registerPlugin(ScrollTrigger);


const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        gsap.to(".nav", {
          backgroundColor: "black",
          paddingTop:'15px',
          paddingBottom:'15px',
          scrollTrigger: {
            trigger: ".nav",
            scroller:"body",
            start: "top -4%", // Change this to your desired scroll position
            end: "top -3%",
            markers: false,
            scrub:1,
            /*
            toggleActions:
            // toggleActions: "play none none reverse",

            Defines what actions should occur at different points of the scroll (enter, leave, enter back, and leave back).
            "play none none reverse" means:
            play: Start the animation when the trigger point is reached.
            none: Do nothing when scrolling past the trigger point.
            none: Do nothing when scrolling back past the trigger point.
            reverse: Reverse the animation when scrolling back past the trigger point.*/


           
          },
        //   duration: 1, // Smooth transition duration
        });


       
        document.querySelectorAll(" ul li ,#main-logo").forEach(element=>{
          let b = document.querySelector(".cursor");
         element.addEventListener("mouseenter",()=>{
            b.style.scale="3"
            b.style.backgroundColor="transparent"
            b.style.border=" 1px solid white"
            // b.style.transition="all 0.1s ease-in-out"
          })
          element.addEventListener("mouseleave",()=>{
            // b.style.transition="none"
              b.style.scale="1"
              b.style.backgroundColor="#9BC91F"
              b.style.border=" none"
          })
           
          })

        
      
      }, []);
   

    const btnStyle ={
        backgroundColor: 'black',
        borderRadius:'50px',
        padding:"15px 36px",
        fontWeight:"bold",
        border:"3px solid #95c11e"
    };
    
  return (
   <nav className="nav w-[100%] fixed p-6 flex flex-col pl-28  z-[49]">
    <ul className='flex ul items-center font-bold gap-16 uppercase text-base'>
    <img id='main-logo' className='h-[75px] relative z-0' src="/logo-white.svg" alt="" />
       <li className=' cursor-pointer hover:text-[#9BC91F]'>toptracer range</li>
       <li className=' cursor-pointer hover:text-[#9BC91F]'>golf lessons</li>
       <li className=' cursor-pointer hover:text-[#9BC91F]'>adventure golf</li>
       <li className=' cursor-pointer hover:text-[#9BC91F]'>cafe</li>
       <li className=' cursor-pointer hover:text-[#9BC91F]'>events</li>
    </ul>
    <div className="buttons w-[100%] flex justify-end pr-20">
        <button style={btnStyle} >BOOK RANGE</button>
        <button style={btnStyle}>BOOK GOLF</button>
    </div>
   </nav>

  )
}

export default Navbar

