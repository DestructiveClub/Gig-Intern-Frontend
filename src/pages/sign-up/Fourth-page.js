import React from "react";
import unsplash from "../../assets/unsplash.png";

import Vector from "../../assets/Vector.png";
import { NavLink } from "react-router-dom";

const TermsCondition = () => {
  return (
    <div className="flex min-h-screen">
      <div className="relative w-1/2 ">
        <img src={unsplash} alt="" className="h-full max-w-full" />
        <h1 className=" right-75 bottom-68 helvetica-font absolute top-1/2 left-1/2 z-10 ml-8 h-[280px] w-[525px] -translate-x-1/2 transform  font-sans text-[30px] font-bold leading-normal text-[#F6FBFF]">
          Discover, Learn and,
          <br />
          Build your skills
          <br />
          while you take on free
          <br />
          Courses
        </h1>
      </div>

      <div className="flex inline-flex w-1/2 flex-col items-start  ">
        <div className="flex flex-col  ">
          <NavLink to="/courses">
            <img className="absolute ml-6 mt-4" src={Vector} alt="" />
          </NavLink>

          <div className="relative">
            <h1 className="Roboto-font leading-{54.856px} custom-font-settings text-black  absolute ml-6 mt-4 font-sans text-[40px] font-bold not-italic opacity-80">
              Terms and Conditions
            </h1>

            <h2 className="Roboto-font leading-{27.428px} custom-font-settings text-black ml-6 mt-4 font-sans text-[20px] font-normal not-italic opacity-60">
              Take a few minutes to go through our services
            </h2>
          </div>

          <div className="ml-6 mb-6 h-[1px] w-[604px] flex-grow bg-[#D9D9D9]"></div>

          <div className="flex-start mt-[10px] flex">
            <div className="ml-6 h-[6px] w-[140px] flex-grow bg-[#1F5EFF]"></div>
            <div className="ml-6 h-[6px] w-[140px] flex-grow bg-[#1F5EFF]"></div>
            <div className="ml-6 h-[6px] w-[140px] flex-grow bg-[#1F5EFF]"></div>
            <div className="ml-6 h-[6px] w-[140px] flex-grow bg-[#1F5EFF]"></div>
          </div>

          <div className="relative mb-4">
            <div className="flex-start absolute top-[28px] mt-12 ml-6 flex inline-flex h-[60px] w-[564px] items-center justify-center gap-[24px] ">
              <div className="rounded-10   flex h-[60px] w-[270px]  items-center justify-center gap-[10px] rounded-md  border bg-[#FFF]">
                <button
                  type="submit"
                  className="Helvetica-font leading-{25.838px} font-sans text-[20px] font-bold not-italic text-[#1F5EFF] "
                >
                  Decline
                </button>
              </div>

              <div className="rounded-10   flex h-[60px] w-[270px]  items-center justify-center gap-[10px] rounded-md  border bg-[#1F5EFF]">
                <button
                  type="submit"
                  className="Helvetica-font leading-{23.838px} font-sans text-[20px] font-bold not-italic text-[#F6FBFF] "
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsCondition;
