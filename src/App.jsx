import { useState , useEffect , useRef} from 'react'
import Navbar from './components/Navbar'
import Bg from './components/Bg'

import Footer from './components/Footer'
import './App.css'

function App() {
  
  const pos = useRef();
  const blur = useRef();
  const arrow = useRef()

  const handleArrow = (a)=>{
    if(a=="over"){
    arrow.current.style.left ="15px"
    arrow.current.style.bottom ="50px"
    arrow.current.style.padding ="3px"
    }
    else if(a=="leave"){
      arrow.current.style.left ="-50px"
      arrow.current.style.bottom ="0"
      arrow.current.style.padding ="56px"
    }
  }

  useEffect(() => {
  
    const handleMouse = (event) => {
      const { clientX, clientY } = event;

     
        pos.current.style.transition = 'top 0.1s ease, left 0.1s ease';  
        pos.current.style.top = `${clientY - 10}px`;
        pos.current.style.left = `${clientX - 10}px`;
        blur.current.style.transition = 'top 1s ease, left 1s ease';
        blur.current.style.top = `${clientY - 250}px`;
        blur.current.style.left = `${clientX - 250}px`;
      
    };

    document.body.addEventListener('mousemove', handleMouse);

    return () => {
      document.body.removeEventListener('mousemove', handleMouse);
    }
  }, []);


  return (
    <div className='text-white'>

      <div ref={arrow} onMouseOver={()=>handleArrow("over")} onMouseLeave={()=>handleArrow("leave")} className='absolute   transition-all ease-in-out  duration-300 z-[10] bottom-0 left-[-50px] flex items-center justify-center border-[3px] border-[#9BC91F] rounded-full p-14 '>
      <img className="arrow h-14" src="/arrow_downward_24dp_FILL0_wght400_GRAD0_opsz24.svg" alt="" />
      </div>

       <div ref={blur} className="fixed cursor-blur pointer-events-none   h-[500px] w-[500px] blur-[50px] rounded-full bg-[#96c11e6a] z-[1] "></div>
      <div ref={pos}  className="fixed pointer-events-none z-[50] cursor h-[25px] w-[25px] bg-[#95c11e] rounded-full"></div>
      <Navbar/>
     
      <video className='fixed  object-cover w-[100%] z-[-1]' autoPlay loop muted src="/SFG-Website-Header-Video-0823.mp4"></video>
      <Bg/>
    
      
      
   </div>

  
  )
}

export default App
