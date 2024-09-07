import React from "react";
import { useRef ,useEffect } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./Services.css";

gsap.registerPlugin(ScrollTrigger);


const Services = () => {
  useEffect(() => {
    document.querySelectorAll("#card-container div").forEach(element=>{
      console.log(element)
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

    gsap.from("#card-container",{
    scale:0.8,
     opacity:0,
     duration:1,
     stagger:0.1,
     scrollTrigger:{
       trigger:"#card-container",
       scroller:"body",
       markers: false,
       start:"top 70%",
       end:"top 55%",
       scrub:2,
     }
    })
     
     
     }, [])
  const same = useRef();
  return (
    <div id="card-container" className="relative z-[40] grid grid-cols-3 gap-20 px-32 text-[2.6rem] font-extrabold  leading-tight pt-16 r ">
      <img
        className="absolute h-32 left-28"
        src="\dots-white.svg"
        alt=""
      />

      {/* Card1  */}
      <div className="relative card-1 group   rounded-full">
        <img
          className="h-[80vh] rounded-lg  object-cover"
          src="\home-toptracer.avif"
          alt=""
        />
        <span className=" absolute bottom-10 pl-6">TOPOTRACER RANGE</span>
        <div className="overlay  rounded-lg absolute opacity-0 group-hover:opacity-[100%] transition-all ease-in-out  duration-500 flex flex-col gap-7 top-0 h-[100%] w-[100%] bg-[#95c11e] px-7 pt-28">
          <h2>TOPTRACER RANGE</h2>
          <p>
            Our range delivers the same ball-tracking technology that traces the
            shots of the game’s best players on TV.
          </p>
          <p>
            Toptracer Range technology offers a fun,&nbsp;engaging, tech-driven
            experience that appeals to seasoned players, range rivals, friends,
            family members, and even first-time golfers.
          </p>
        </div>
      </div>

      {/* Card2  */}
      <div className="relative card-2 group  rounded-lg">
        <img
          className="h-[80vh] rounded-lg object-cover"
          src="\hero-4.avif "
          alt=""
        />
        <div className="flex flex-col absolute pl-6 bottom-12">
          <span className="text-2xl">MR MULLIGAN'S</span>
          <span>ADVENTURE GOLF</span>
        </div>

        <div className="overlay  rounded-lg absolute opacity-0 group-hover:opacity-[100%] transition-all ease-in-out duration-500 flex flex-col gap-7 top-0 h-[100%] w-[100%] bg-[#95c11e] px-7 pt-28">
          <h2>ADVENTURE GOLF</h2>
          <p>Adventure awaits you!</p>
          <p>
            Become a Jurassic explorer as you delve into the land of the
            dinosaurs! Putt your way through prehistoric landscape, cascading
            waterfalls and meet some dinosaur friends along the way.
          </p>
        </div>
      </div>

      {/* card3 */}
      <div className="relative card-3 group  rounded-lg">
        <img
          className="h-[80vh] rounded-lg object-cover"
          src="\home-lessons.webp"
          alt=""
        />
        <span className="pl-6 absolute bottom-10">
          GOLF
          <br /> LESSONS
        </span>
        <div className="overlay  rounded-lg absolute opacity-0 group-hover:opacity-[100%] transition-all ease-in-out duration-500 flex flex-col gap-7 top-0 h-[100%] w-[100%] bg-[#95c11e] px-7 pt-28">
          <h2>GOLF LESSONS</h2>
          <p>
            Passionate about player development, whether you are new to the game
            or an aspiring pro, we offer both group and individual lessons
            tailored to you with the sole focus of helping you reach your goals.
          </p>
        </div>
      </div>

     
    </div>
    
  );
};

export default Services;
