import React from "react";
import { useEffect } from "react";
import "./Footer.css";

const Footer = () => {
  useEffect(() => {
    document
      .querySelectorAll(" #events-1 span , #events-2 span , .tw-big ")
      .forEach((element) => {
       
        let b = document.querySelector(".cursor");
        element.addEventListener("mouseenter", () => {
          b.style.scale = "3";
          b.style.backgroundColor = "transparent";
          b.style.border = " 1px solid white";
          // b.style.transition="all 0.1s ease-in-out"
        });
        element.addEventListener("mouseleave", () => {
          // b.style.transition="none"
          b.style.scale = "1";
          b.style.backgroundColor = "#9BC91F";
          b.style.border = " none";
        });
      });
  }, []);

  return (
    <div
      id="footer"
      className="h-[55vh]  text-black relative bg-gradient-to-r from-[#9BC91F] to-[#27A535]  py-5"
    >
      <img
        className="absolute z-[10] left-0 h-[90%]"
        src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/dots-footer.svg"
        alt=""
      />

      <div className="relative z-[40] flex flex-col text-[2.1rem] w-[100%] h-[100%] font-extrabold pt-16 pl-36 gap-20">
        <div className="flex uppercase gap-20">
          <img id="footer-logo" className="h-28 transition-all ease-in-out duration-200 tw-big" src="/logo-white.svg" alt="" />

          <div id="events-1" className="flex gap-2 flex-col">
            <span className="">toptracer range</span>
            <span>crazy golf</span>
            <span>CAFÉ</span>
          </div>

          <div id="events-2" className="flex gap-2 flex-col">
            <span>events</span>
            <span>golf lessons</span>
            <span>contact us</span>
          </div>

          <div className="flex flex-col">
            <div className=" text-base font-semibold flex flex-col">
              <span>a20,sidcup bypass</span>
              <span>chislehurst</span>
              <span>kent</span>
              <span>br7 6rp</span>
              <span>
                tel:{" "}
                <span className="font-bold tw-big">
                  0208 309 0181
                </span>
              </span>
            </div>
            <span className=" text-lg tw-big">get directions</span>
          </div>
        </div>
        <div className=" relative  w-[100%] flex gap-72  text-sm  font-medium">
          <span>
            Copyright © 2024 Ayush Gupta | All rights reserved. |
            <span className="tw-big"> Privacy Policy</span> | <span className="tw-big">Terms And Conditions </span>|
            <span className="tw-big">Gender Pay Gap</span>
          </span>
          <span className="tw-big">Web Design London</span>
        </div> 
      </div>
    </div>
  );
};

export default Footer;
