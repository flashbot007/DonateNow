import React from "react";
import { useEffect } from "react";
import "./Page2.css";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Services from "./Services";
gsap.registerPlugin(ScrollTrigger);

const Page2 = () => {
  useEffect(() => {
 gsap.from(".about",{
  y:50,
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:".about",
    scroller:"body",
    markers: false,
    start:"top 80%",
    end:"top 55%",
    scrub:2,
  }
 })
  
  
  }, [])
  
  return (
    <div className="h-[100vh] w-[100%]">
      <div className="scroll relative z-[45] whitespace-nowrap overflow-x-hidden overflow-y-hidden flex gap-2 pt-10">
        <div className=" scroll-in cursor-none  whitespace-nowrap text-9xl font-extrabold ">
          <h4>TOPTRACER RANGE</h4>
          <h4>GOLF LESSONS</h4>
          <h4>CRAZY GOLF</h4>
          <h4>COFFFE SHOP</h4>
        </div>
        <div className=" scroll-in whitespace-nowrap  text-9xl font-extrabold">
          <h4>TOPTRACER RANGE</h4>
          <h4>GOLF LESSONS</h4>
          <h4>CRAZY GOLF</h4>
          <h4>COFFFE SHOP</h4>
        </div>
      </div>

      <div className="about relative z-20 flex flex-col justify-center items-center mt-32 gap-10">
        <h1 className=" text-6xl font-extrabold">ABOUT US</h1>
        <div className="flex px-24 gap-32 text-xl text-center">
          <img className=" w-[170px] h-[170px] object-cover rounded-md" src="/home-about-1.avif" alt="" />

          <div className="flex flex-col gap-5">
            <h3 className=" leading-10">Home to a 46-bay, multi-tier, floodlit driving range, powered by
            Toptracer Range technology. Complimented by a practice green and
            bunker, coffee shop and American Golf Store. There truly is
            something for everyone as we also boast two outdoor 18-hole dinosaur
            themed crazy golf courses.</h3>

            <span>Please note: we are a cashless venue. The
            range closes at 10pm with last balls at 9pm.</span> 
          </div>
          <img className="w-[170px] h-[170px] object-cover rounded-md" src="/home-about-2.avif" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Page2;
