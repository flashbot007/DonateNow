import React from "react";
import Page2 from "./Page2";
import "./Bg.css"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useState , useEffect } from 'react';
import Services from "./Services";
import Signup from "./Signup";
import Page3 from "./Page3"; 

gsap.registerPlugin(ScrollTrigger);

const Bg = () => {
    useEffect(()=>{
        gsap.to(".full-page",{
            backgroundColor:"black",
            scrollTrigger:{
                trigger:".full-page",
                scroller:"body",
                markers:false,
                start:"top -30%",
                end:"top -61%",
                scrub:2,

            }
        })
    },[])
  return (
    <div className="full-page relative overflow-hidden bg-black bg-opacity-50">
      <div className=" h-[100vh] w-[100%] flex flex-col  justify-center items-center gap-3 ">
        <h1 id="main" className="relative leading-none z-10 text-[9rem]  font-extrabold flex flex-col text-center">
            
          <span className="z-10">EAT. DRINK.</span>
          <span className="z-10">PLAY.</span>

          {/* <div className=" text-black z-0 left-[-6px] top-[-6px] absolute flex flex-col">
          <span>EAT. DRINK.</span>
          <span>PLAY.</span>
          </div> */}
        </h1>
        <h2 className="z-10 font-extrabold text-3xl text-white">
          WELCOME TO SIDCUP FAMILY GOLF!
        </h2>
        <h3 className=" z-10 font-medium leading-[1] flex flex-col text-center text-[1.3rem]">
          <span>
            
            Sidcup Family Golf is a Toptracer driving range and crazy golf venue
            in
          </span>
          <span>
            Sidcup, South East London. Passionate about technology, player
          </span>
          <span>
           
            development and making golf fun and accessible to everyone.
          </span>
        </h3>
      </div>
      <Page2/>
      <Services/>
      <Signup/>
      <Page3/>
    
    </div>
  );
};

export default Bg;
