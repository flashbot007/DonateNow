import React from "react";
import { useEffect  , useState} from "react";
import "./Page3.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "./Footer";
import Gallery from "./Gallery";

gsap.registerPlugin(ScrollTrigger);

const Page3 = () => {
  const [index, setIndex] = useState(0)
  const [active, setActive] = useState(0)
  const [reviewCount, setReviewCount] = useState(0)
  let reviews = document.querySelector("#reviews")
  let reviewIndex = [" Absolutely loved the experience! The staff looked after me ensured was enjoying the range and gave me helpful tips to get the best out of my game. Digital screens to see my progress. I’ll be back 😁 🏌🏽‍♀️"
    ,"Definitely one of the best places to hit some golf balls, the TopTracer in most of the bays is a fantastic addition for the price! I’m yet to try the Mini golf but everyone seems to be having fun over there!",
 "Pleasantly surprised to discover the mini golf is open until 10pm during weekdays 😊 Always enjoy visit here, cafe does some nice goodies too 👍🏽",
 "Great facilities — loads of bays in the driving range with many coloured targets to aim for and a ball tracking monitor to see if you’re getting close.",
  "Excellent couple of hours, relax and enjoy in the fun. Staff were accommodating, friendly and very helpful. Café on site for refreshments etc. Will keep children enterntained during the holidays. Worth a visit if you haven’t been."]
  const img = ["/food/food-item-1.avif","/food/food-item-2.avif","/food/food-item-3.avif"]
  let d = document.querySelectorAll(".circle div")
  const circle = Array.from(d);
  
  useEffect(() => {


  //  food img src change

    const c = setInterval(()=>{
      setIndex((index+1)%3);
      setActive((active+1)%3);
      document.querySelector("#food-img").src =`${img[index]}`
      
    },3000)
    return()=>{

      clearInterval(c)
    }
  }, [index,active]);


    useEffect(()=>{
    //hovering effect on moving div
    document.querySelectorAll(" .card-links div").forEach((element) => {
      const b = document.querySelector(".cursor");

      element.addEventListener("mouseenter", () => {
        b.style.scale = "3";
        b.style.backgroundColor = "transparent";
        b.style.border = " 1px solid white";
        document.querySelector("#links-h1").style.WebkitTextStroke = "2px #9BC91F";

      });
      element.addEventListener("mouseleave", () => {
        b.style.scale = "1";
        b.style.backgroundColor = "#9BC91F";
        b.style.border = " none";
        document.querySelector("#links-h1").style.WebkitTextStroke = "2px white";
      });
    });

    gsap.from("#links-h1", {
      y: 30,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#links-h1",
        scroller: "body",
        start: "top 90%",
        end: "top 85%",
        scrub: 3,
      },
    });

  },[])


  useEffect(() => {

    let timeId = setInterval(() => {
      setReviewCount((reviewCount+1)%3)
      reviews.innerHTML = `${reviewIndex[reviewCount]}`
    }, 4000);
    

    function moveRight(){
      gsap.to("#quote-left",{
        x:50,
        y:50,
        duration:2
      })
      gsap.to("#quote-right",{
        x:-50,
        y:-50,
        duration:2
      })

      setTimeout(moveBack,2000)
    }

    function moveBack(){
      gsap.to("#quote-left",{
        x:0,
        y:0,
        duration:2
      })
      gsap.to("#quote-right",{
        x:0,
        y:0,
        duration:2
      })
      setTimeout(moveRight,2000)
    }

    moveBack();

    return()=>{
      clearInterval(timeId)
      gsap.killTweensOf("#quote-left", "#quote-right")
    }
  }, [reviewCount])
  
   

  return (
    <div id="page-3" className="">
      {/* food and drink section  */}

      <div className="food relative z-[2] p-32 gap-16   flex">
        <div className=" relative rounded-xl w-[50%] h-[68vh]">
          <img className={` absolute bottom-0 h-32 z-0${active==0 ?"bg-[#95c11e]": "bg-white"}"`} src="/food/food-dots-white.svg" alt="" />
          <img id="food-img" className=" relative z-1 rounded-xl h-[86%] w-[100%] object-cover" src="/food/food-item-1.avif" alt="" />
          <div className="circle flex justify-center items-center gap-5 p-8">
            <div className="circle-1 rounded-full bg-white h-3 w-3"></div>
            <div className="circle-2 rounded-full bg-white h-3 w-3"></div>
            <div className="circle-3 rounded-full bg-white h-3 w-3"></div>
          </div>
        </div>
        <div className="w-[50%] pt-10  flex flex-col gap-10 pl-5">
          <h1 className="font-extrabold mb-5 text-center text-6xl">FOOD AND DRINK</h1>
          <p className="text-white text-xl">
            Whether you’re getting ready to play, just finishing your practice
            session or feeling peckish on the range, we have a variety of food
            and drink options bought directly to your table or bay.
          </p>
          <p className="text-white  text-xl">
            We make sure that we cater for everyone, offering a range of vegan
            and gluten free options.
          </p>
          <button className="rounded-full font-bold border-[2px] w-fit px-8 py-3 border-[#95c11e]">COFFEE SHOP</button>
        </div>
      </div>
      <Gallery/>

      {/* reviews */}
      <div className="flex items-center justify-center h-[100vh] w-[100%] relative z-[40] ">
        <p id="reviews" className="text-center w-[55%] text-3xl font-extrabold text-white leading-relaxed uppercase  ">
          Absolutely loved the experience! The staff looked after me ensured I
          was enjoying the range and gave me helpful tips to get the best out of
          my game. Digital screens to see my progress. I’ll be back 😁 🏌🏽‍♀️
        </p>
        <img
          id="quote-left"
          className="absolute h-14 top-[16%] left-[15%]"
          src="/quote-left.svg"
          alt=""
        />
        <img
          id="quote-right"
          className="absolute h-14 bottom-[22%] right-[15%]"
          src="/quote-right.svg"
          alt=""
        />
      </div>

      {/* what are you waiting
       */}
 
      <div className="links  relative w-[100%] h-[40vh]  flex flex-col items-center pt-1 justify-start text-black ">
        <h1
          id="links-h1"
          className="relative z-[2] font-extrabold text-[4.8rem] "
        >
          WHAT ARE YOU WAITING FOR?
        </h1>
        <div className="card-links  top-[-35px] relative z-[40]  grid grid-cols-3 gap-5 w-[100%] px-28">
          <div className="rounded-lg">
            <h2 className=" text-center">TOPTRACER RANGE</h2>
          </div>
          <div className=" rounded-lg">
            <h2>GOLF LESSONS</h2>
          </div>
          <div className="rounded-lg">
            <h2>ADVENTURE GOLF</h2>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page3;
