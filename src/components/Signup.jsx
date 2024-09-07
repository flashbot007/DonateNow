import React from 'react'

const Signup = () => {
  return (
   
       <div className=" relative z-[60] p-3 signup flex items-center justify-between h-[40vh] bg-gradient-to-tr from-[#9BC91F] to-[#27A535] mt-20 ">
        <img className=" h-[100%] rotate-180 object-cover w-[12%]" src="/dots-side-2.svg" alt="" />
        <div className="flex flex-col gap-3 text-black text-3xl font-extrabold text-center">
            <span>SIGN UP FOR SIDCUP NEWS AND SPECIAL</span>
            <span>OFFERS</span>
            <span>STRIGHT TO YOUR INBOX</span>
        </div>
        <img className="h-[100%] object-cover w-[12%] " src="/dots-side-1.svg" alt="" />
      </div>
  )
}

export default Signup
