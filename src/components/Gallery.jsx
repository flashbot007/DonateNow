import React from 'react'
import { useEffect } from 'react'
import "./Gallery.css"

const Gallery = () => {
     useEffect(() => {
        document.querySelectorAll(".gallery img").forEach(element=>{
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
     }, [])
     
  return (
    <div className=' flex relative z-[3] flex-col rotate-[-3deg] mb-12 mt-10'>
      <div className='gallery relative z-[40] w-[100%] h-[42vh] gap-8 flex white transition-all ease-in-out duration-75'>
        <img src="/img/1.jpeg" alt="" />
        <img src="/img/2.jpg" alt="" />
        <img src="/img/2.jpg" alt="" />
        <img src="/img/3.jpg" alt="" />
        <img src="/img/3.jpg" alt="" />
        <img src="/img/4.webp" alt="" />
        <img src="/img/5.jpeg" alt="" />
        <img src="/img/5.jpeg" alt="" />
        <img src="/img/5.jpeg" alt="" />
        <img src="/img/5.jpeg" alt="" />
        <img src="/img/1.jpeg" alt="" />
        <img src="/img/2.jpg" alt="" />
        <img src="/img/2.jpg" alt="" />
        <img src="/img/3.jpg" alt="" />
        <img src="/img/3.jpg" alt="" />
        <img src="/img/4.webp" alt="" />
        <img src="/img/5.jpeg" alt="" />
        <img src="/img/5.jpeg" alt="" />
        <img src="/img/5.jpeg" alt="" />
        <img src="/img/5.jpeg" alt="" />
      </div>
      <div className='flex justify-end pr-32 gap-3 pt-5'>
      <svg class="svg-inline--fa fa-instagram fa-w-14" aria-hidden="true" data-fa-processed="" aria-label="Instagram" data-prefix="fab" data-icon="instagram" role="img" viewBox="0 0 448 512" width="28" height="28">
    <path fill="white" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
</svg>

                <span id='follow' className='font-extrabold text-2xl '>FOLLLOW US ON INSTAGRAM</span>
                </div>

    </div>
  )
}

export default Gallery
