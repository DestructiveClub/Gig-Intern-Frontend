import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Google from "../../assets/Google.png";
import unsplash from "../../assets/unsplash.png";
import Vector from "../../assets/Vector.png";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider,signInWithPopup } from "firebase/auth";

const InterestPage = () => {

  const [roleIndex, setRoleIndex] = useState(0);
  const roles =
    ["FrontEnd Development",
      "BackEnd Development",
      "FullStack Development",];

      const firebaseConfig = {
        apiKey: "AIzaSyCJHbWV7j6M-cEuowFQetUPJcQSbr5kL8Q",
        authDomain: "gig-intern-27b8e.firebaseapp.com",
        projectId: "gig-intern-27b8e",
        storageBucket: "gig-intern-27b8e.appspot.com",
        messagingSenderId: "580789098357",
        appId: "1:580789098357:web:d4f4bf5e2adc585ae3e53c",
        measurementId: "G-VYV0PFMTW2"
      };
      const app = initializeApp(firebaseConfig);

  
  const handleGoogleSignIn = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
  
      // Now, you can access the user object and perform any necessary actions.
      console.log("Google Sign-In Success: ", user);
    } catch (error) {
      console.error("Google Sign-In Error: ", error);
    }
  };

  const nextRole = () => {
    setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
  };

  const prevRole = () => {
    setRoleIndex((prevIndex) => (prevIndex - 1 + roles.length) % roles.length);
  };

  return (
    <div className="flex min-h-screen overflow-y-hidden">
      <div className="relative w-1/2 ">
        <img src={unsplash} alt="" className="h-full max-w-full" />
        <h1 className=" right-75 bottom-68 helvetica-font absolute top-1/2 left-1/2 z-10 ml-8 h-[280px] w-[75%] -translate-x-1/2 transform font-sans text-[30px] font-bold leading-normal text-[#F6FBFF]">
          Discover, Learn and,
          <br />
          Build your skills
          <br />
          while you take on free
          <br />
          Courses
        </h1>
      </div>

      <div className="gap-{30px} flex inline-flex w-1/2 flex-col items-start  bg-white">
        <div className="flex flex-col space-y-6 ">
          <NavLink to="/signup">
            <img className="absolute ml-6" src={Vector} alt="" />
          </NavLink>

          <h1 className="Roboto-font leading-{54.856px} custom-font-settings  text-black ml-6 mt-4 font-sans text-[40px] font-bold not-italic opacity-80">
            Welcome To Gig Intern
          </h1>
          <h2 className="Roboto-font leading-{27.428px} custom-font-settings text-black ml-6 mt-4 font-sans text-[20px] font-normal not-italic opacity-60">
            Select your roles and interests
          </h2>
          <div className="ml-6 h-[1px] w-[580px] flex-grow bg-[#D9D9D9]"></div>

          <div className="flex-start flex">
            <div className="ml-6 h-[6px] w-[120px] flex-grow bg-[#1F5EFF]"></div>
            <div className="ml-6 h-[6px] w-[120px] flex-grow bg-[#1F5EFF]"></div>
            <div className="ml-6 h-[6px] w-[120px] flex-grow bg-[#D9D9D9]"></div>
            <div className="ml-6 h-[6px] w-[120px] flex-grow bg-[#D9D9D9]"></div>
          </div>

          <div className="ml-6">
            <div className=" relative mb-4 flex h-[60px] w-[580px] rounded-lg border border-blue-500 border-opacity-60 bg-white">
              <label
                htmlFor="text-input"
                className="Roboto-font leading-{19.2px}  text-black absolute top-[-12px] left-[24px] font-sans text-[14px] font-normal not-italic opacity-80 bg-white px-2"
              >
                Select your role
              </label>
              <input
                type="text"
                placeholder={roles[roleIndex]}
                className="Roboto-font ml-6 mt-0 flex text-center font-sans text-[14px] font-normal text-[#D9D9D9] outline-none"
              />

              <svg
                onClick={prevRole}
                className="cursor-pointer absolute right-0 top-0 mr-2 mt-4"
                xmlns=
                "http://www.w3.org/2000/svg" width="18" height="11" viewBox="0 0 18 10" fill="none">
                <path
                  d="M1.02227 8.49062L1.11367 8.38398L8.01992 0.436716C8.25352 0.167576 8.60391 -2.86102e-06 8.99492 -2.86102e-06C9.38594 -2.86102e-06 9.73633 0.172654 9.96992 0.436716L16.8711 8.36875L16.9879 8.50078C17.0742 8.62773 17.125 8.78007 17.125 8.94257C17.125 9.38437 16.7492 9.74492 16.282 9.74492H1.71797C1.25078 9.74492 0.875 9.38437 0.875 8.94257C0.875 8.775 0.930859 8.61758 1.02227 8.49062Z" fill="black" fill-opacity="0.7" />
              </svg>

              <svg
                onClick={nextRole}
                className="cursor-pointer absolute right-0 top-0 mr-2 mt-8 "
                xmlns="http://www.w3.org/2000/svg" width="26" height="10" viewBox="0 0 18 10" fill="none">
                <g clip-path="url(#clip0_326_430)">
                  <path d="M20.9777 2.12422L20.8863 2.23086L13.9801 10.1781C13.7465 10.4473 13.3961 10.6148 13.0051 10.6148C12.6141 10.6148 12.2637 10.4422 12.0301 10.1781L5.12891 2.24609L5.01211 2.11406C4.92578 1.98711 4.875 1.83476 4.875 1.67226C4.875 1.23047 5.25078 0.86992 5.71797 0.86992L20.282 0.869919C20.7492 0.869919 21.125 1.23047 21.125 1.67226C21.125 1.83984 21.0691 1.99726 20.9777 2.12422Z" fill="black" fill-opacity="0.7" />
                </g>
                <defs>
                  <clipPath id="clip0_326_430">
                    <rect width="26" height="10" fill="white" transform="matrix(-1 8.74228e-08 8.74228e-08 1 26 0.744919)" />
                  </clipPath>
                </defs>
              </svg>

            </div>

            <h1 className="Helvetica-font custom-font-settings text-black leading-{41.142px} font-sans text-[30px] font-bold not-italic opacity-80">
              Select your interests
            </h1>
          </div>

          <form className="ml-6">
            <div className="flex-start flex flex-shrink-0 gap-[10px]">
              <div className=" mb-4  h-[38px] w-[187px] rounded-lg border border-blue-500 border-opacity-60 bg-white">
                <text className="font-sf-pro-text  ml-4 text-[15px] font-medium not-italic  text-[#1F5EFF] ">
                  FrontEnd Development
                </text>
              </div>

              <div className=" mb-4  h-[38px] w-[187px] rounded-lg border border-blue-500 border-opacity-60 bg-white">
                <text className="font-sf-pro-text ml-4 text-[15px] font-medium not-italic  text-[#1F5EFF] ">
                  BackEnd Development
                </text>
              </div>

              <div className=" mb-4  h-[38px] w-[187px] rounded-lg border border-blue-500 border-opacity-60 bg-white">
                <text className="font-sf-pro-text ml-4 text-[15px] font-medium not-italic  text-[#1F5EFF] ">
                  FullStack Development
                </text>
              </div>
            </div>

            <div className="flex-start flex gap-[10px] ">
              <div className=" mb-4  h-[38px] w-[187px] rounded-lg border border-blue-500 border-opacity-60 bg-white">
                <text className="font-sf-pro-text ml-4 text-[15px] font-medium not-italic  text-[#1F5EFF] ">
                  Product Management
                </text>
              </div>

              <div className=" mb-4  h-[38px] w-[187px] rounded-lg border border-blue-500 border-opacity-60 bg-white">
                <text className="font-sf-pro-text ml-4 text-[15px] font-medium not-italic  text-[#1F5EFF] ">
                  Product Design
                </text>
              </div>

              <div className=" mb-4  h-[38px] w-[187px] rounded-lg border border-blue-500 border-opacity-60 bg-white">
                <text className="font-sf-pro-text ml-4 text-[15px] font-medium not-italic  text-[#1F5EFF] ">
                  UI/UX Design
                </text>
              </div>
            </div>

            <div className="flex-start flex gap-[10px]">
              <div className=" mb-4  h-[38px] w-[187px] rounded-lg border border-blue-500 border-opacity-60 bg-white">
                <text className="font-sf-pro-text ml-4 text-[15px] font-medium not-italic  text-[#1F5EFF] ">
                  Content Marketing
                </text>
              </div>

              <div className=" mb-4  h-[38px] w-[187px] rounded-lg border border-blue-500 border-opacity-60 bg-white">
                <text className="font-sf-pro-text ml-4 text-[15px] font-medium not-italic  text-[#1F5EFF] ">
                  Motion Designer
                </text>
              </div>

              <div className=" mb-4  h-[38px] w-[187px] rounded-lg border border-blue-500 border-opacity-60 bg-white">
                <text className="font-sf-pro-text ml-4 text-[15px] font-medium not-italic  text-[#1F5EFF] ">
                  Copy-Writing
                </text>
              </div>
            </div>

            <div className="flex-start flex gap-[10px]">
              <div className=" mb-4  h-[38px] w-[187px] rounded-lg border border-blue-500 border-opacity-60 bg-white">
                <text className="font-sf-pro-text ml-4 text-[15px] font-medium not-italic  text-[#1F5EFF] ">
                  Podcast Management
                </text>
              </div>

              <div className=" mb-4  h-[38px] w-[187px] rounded-lg border border-blue-500 border-opacity-60 bg-white">
                <text className="font-sf-pro-text ml-4 text-[15px] font-medium not-italic  text-[#1F5EFF] ">
                  Mobile App Dev
                </text>
              </div>

              <div className=" mb-4  h-[38px] w-[187px] rounded-lg border border-blue-500 border-opacity-60 bg-white">
                <text className="font-sf-pro-text ml-4 text-[15px] font-medium not-italic  text-[#1F5EFF] ">
                  Software Development
                </text>
              </div>
            </div>

            <div className="flex-start flex gap-[10px]">
              <div className=" mb-4  h-[38px] w-[187px] rounded-lg border border-blue-500 border-opacity-60 bg-white">
                <text className="font-sf-pro-text ml-4 text-[15px] font-medium not-italic  text-[#1F5EFF] ">
                  Cyber Security
                </text>
              </div>

              <div className=" mb-4  h-[38px] w-[187px] rounded-lg border border-blue-500 border-opacity-60 bg-white">
                <text className="font-sf-pro-text ml-4 text-[15px] font-medium not-italic  text-[#1F5EFF] ">
                  Mobile App Dev
                </text>
              </div>

              <div className=" mb-4  h-[38px] w-[187px] rounded-lg border border-blue-500 border-opacity-60 bg-white">
                <text className="font-sf-pro-text ml-4 text-[15px] font-medium not-italic  text-[#1F5EFF] ">
                  Public Relations
                </text>
              </div>
            </div>
          </form>

          <div className="ml-6 flex flex-col items-center">
            <div className="py-90 rounded-10 flex  h-[60px] w-[580px] items-center  justify-center gap-[10px] rounded-md border  bg-[#1F5EFF] px-10">
              <NavLink
                to="/courses"
                className="Helvetica-font leading-{23.838px} font-sans text-[20px] font-bold not-italic text-[#F6FBFF] "
              >
                Next
              </NavLink>
            </div>

            <div className="flex-start mt-4 flex items-center">
              <div className="h-[1px] w-[274px] flex-grow bg-[#29ABFF] bg-opacity-60"></div>
              <h2 className="Roboto-font leading-{19.2px} text-black font-sans text-[14px] font-bold font-normal not-italic opacity-80 ">
                OR
              </h2>
              <div className="h-[1px] w-[274px] flex-grow bg-[#29ABFF] bg-opacity-60"></div>
            </div>

            <button
              onClick={handleGoogleSignIn}
              className="py-90 rounded-10 mt-4 flex flex h-[60px] w-[580px] items-center justify-center justify-center  gap-[10px] rounded-md border   border-blue-500 px-10">
              <img className="h-[22.875px] w-[22.875px]" src={Google} alt="" />
              <h1 className="Roboto-font leading-{19.2px} text-black mt-14 mb-16 font-sans text-[14px] font-normal not-italic opacity-60">
                continue with Google
              </h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InterestPage;
