import React, { useState } from 'react';
import unsplash from '../../assets/unsplash.png';
import Google from '../../assets/Google.png';
import Vector from '../../assets/Vector.png';
import { NavLink } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider,signInWithPopup } from "firebase/auth";

function Courses() {

  const [roleIndex, setRoleIndex] = useState(0);
  const roles =
    ["FrontEnd Development",
      "BackEnd Development",
      "FullStack Development",];

  const nextRole = () => {
    setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
  };

  const prevRole = () => {
    setRoleIndex((prevIndex) => (prevIndex - 1 + roles.length) % roles.length);
  };

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



  return (
    <div className="flex min-h-screen">
      <div className="w-1/2 relative ">
        <img
          src={unsplash}
          alt=""
          className="max-w-full h-full"
        />
        <h1 className=' absolute top-1/2 left-1/2 right-75 bottom-68 transform -translate-x-1/2 ml-8 w-[525px] h-[280px] text-[30px] text-[#F6FBFF] font-sans helvetica-font leading-normal font-bold z-10'>
          Discover, Learn and,<br />
          Build your skills<br />
          while you take on free<br />
          Courses
        </h1>
      </div>

      <div className="w-1/2 flex inline-flex flex-col items-start gap-{37px} ">
        <div className='flex flex-col space-y-6 bg-white'>

          <NavLink to='/interest'>
            <img
              className='absolute ml-6'
              src={Vector}
              alt=''
            />
          </NavLink>


          <h1
            className=
            'ml-6 mt-4 text-[40px]  not-italic font-sans Roboto-font font-bold leading-{54.856px} custom-font-settings text-black opacity-80'>
            Welcome To Gig Intern
          </h1>
          <h2
            className=
            'ml-6 mt-4 text-[20px] not-italic font-sans Roboto-font font-normal leading-{27.428px} custom-font-settings text-black opacity-60'>
            Select your Courses you'd like to offer
          </h2>
          <div className="flex-grow w-[604px] h-[1px] bg-[#D9D9D9] ml-6"></div>

          <div className='flex flex-start'>
            <div className="flex-grow w-[120px] h-[6px] bg-[#1F5EFF] ml-6"></div>
            <div className="flex-grow w-[120px] h-[6px] bg-[#1F5EFF] ml-6"></div>
            <div className="flex-grow w-[120px] h-[6px] bg-[#1F5EFF] ml-6"></div>
            <div className="flex-grow w-[120px] h-[6px] bg-[#D9D9D9] ml-6"></div>
          </div>

          <div className='ml-6'>
            <div className="relative mb-4  bg-white border rounded-lg border-blue-500 border-opacity-60 w-[619px] h-[60px]">
              <label
                htmlFor="text-input"
                className="text-[14px] absolute bg-white px-2 top-[-12px] left-[24px] not-italic font-sans Roboto-font font-normal leading-{19.2px} text-black opacity-80 ">
                Select your Courses
              </label>
              <input
                type="text"
                placeholder={roles[roleIndex]}
                className='flex text-center ml-6 mt-4 outline-none text-[14px] text-[#D9D9D9] font-sans Roboto-font font-normal'
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

            <div div className="relative mb-4  bg-white border rounded-lg border-blue-500 border-opacity-60 w-[619px] h-[60px]">
              <label
                htmlFor="text-input"
                className="text-[14px] bg-white px-2 absolute  top-[-12px] left-[24px] not-italic font-sans Roboto-font font-normal leading-{19.2px} text-black opacity-80 ">
                Select your Courses
              </label>
              <input
                type="text"
                placeholder=''
                className='flex text-center ml-6 mt-6 outline-none text-[14px] text-[#D9D9D9] font-sans Roboto-font font-normal'
              />
            </div>

            <div className="relative mb-4  bg-white border rounded-lg border-blue-500 border-opacity-60 w-[619px] h-[60px]">
              <label
                htmlFor="text-input"
                className="text-[14px] bg-white px-2 absolute  top-[-12px] left-[24px] not-italic font-sans Roboto-font font-normal leading-{19.2px} text-black opacity-80 ">
                Select your Courses
              </label>
              <input
                type="text"
                placeholder=''
                className='flex text-center ml-6 mt-6 outline-none text-[14px] text-[#D9D9D9] font-sans Roboto-font font-normal'
              />
            </div>

            <div className="relative mb-4  bg-white border rounded-lg border-blue-500 border-opacity-60 w-[619px] h-[60px]">
              <label
                htmlFor="text-input"
                className="text-[14px] bg-white px-2 absolute  top-[-12px] left-[24px] not-italic font-sans Roboto-font font-normal leading-{19.2px} text-black opacity-80 ">
                Select your Courses
              </label>
              <input
                type="text"
                placeholder=''
                className='flex text-center ml-6 mt-6 outline-none text-[14px] text-[#D9D9D9] font-sans Roboto-font font-normal'


              />
            </div>

            <div className="relative mb-4  bg-white border rounded-lg border-blue-500 border-opacity-60 w-[619px] h-[60px]">
              <label
                htmlFor="text-input"
                className="text-[14px] bg-white px-2 absolute  top-[-12px] left-[24px] not-italic font-sans Roboto-font font-normal leading-{19.2px} text-black opacity-80 ">
                Select your Courses
              </label>
              <input
                type="text"
                placeholder=''
                className='flex text-center ml-6 mt-6 outline-none text-[14px] text-[#D9D9D9] font-sans Roboto-font font-normal'


              />
            </div>


          </div>


          <div className='flex flex-col items-center ml-6'>
            <div className='flex py-90 px-10  justify-center items-center gap-[10px]  rounded-10 border rounded-md bg-[#1F5EFF]  w-[610px] h-[60px]'>
              <NavLink to="/termsandconditions"

                className="text-[20px] not-italic font-sans Helvetica-font font-bold leading-{23.838px} text-[#F6FBFF] ">
                Next
              </NavLink>
            </div>

            <div className="flex flex-start items-center mt-4">
              <div className="flex-grow w-[274px] h-[1px] bg-[#29ABFF] bg-opacity-60"></div>
              <h2 className="text-[14px] not-italic font-sans Roboto-font font-bold font-normal leading-{19.2px} text-black opacity-80 ">OR</h2>
              <div className="flex-grow w-[274px] h-[1px] bg-[#29ABFF] bg-opacity-60"></div>
            </div>

            <button
            onClick={handleGoogleSignIn} 
            className="flex justify-center mt-4 flex py-90 px-10 border-blue-500 justify-center items-center gap-[10px]  rounded-10 border rounded-md   w-[610px] h-[60px]">
              <img className='w-[22.875px] h-[22.875px]' src={Google} alt="" />
              <h1 className="text-[14px] mt-14 not-italic font-sans Roboto-font font-normal leading-{19.2px} text-black opacity-60 mb-16">continue with Google</h1>
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
