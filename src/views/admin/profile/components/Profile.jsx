import React from "react";
import avatar from "assets/img/avatars/avatar11.png";
import Card from "components/card";

const Profile = () => {
  return (
    <Card extra={"items-center w-full h-full p-[16px] bg-cover"}>
      {/* Background and profile */}
      <div
        className="relative flex h-20 w-full justify-left rounded-xl bg-cover"
      >
        <div className="relative flex h-[120px] w-[120px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
          <img className="h-full w-full rounded-full" src={avatar} alt="" />
          
        </div>
        <div className=" flex flex-col items-left ml-10 mr-5">
        <h4 className="text-[25px] font-[700] text-black-800 dark:text-white">
          Calvin Philips
        </h4>
        <h5 className="text-[20px] text-blue-600 font-[700] ">Level 1</h5>
        <p className="text-base font-[700]  text-gray-600 text-[20px]">Kumasi, Ghana.</p>
      </div>
    <div className="m-auto flex"> 
      <svg xmlns="http://www.w3.org/2000/svg" width="33" height="34" viewBox="0 0 33 34" fill="none">
          <path d="M5.44258 22.477C2.41127 22.477 0 20.0658 0 17.0344C0 14.0031 2.41127 11.5918 5.44258 11.5918C8.4739 11.5918 10.8852 14.0031 10.8852 17.0344C10.8852 19.9969 8.4739 22.477 5.44258 22.477ZM5.44258 13.5898C3.58246 13.5898 2.06681 15.1054 2.06681 16.9655C2.06681 18.8257 3.58246 20.3413 5.44258 20.3413C7.30271 20.3413 8.81838 18.8257 8.81838 16.9655C8.81838 15.1743 7.30271 13.5898 5.44258 13.5898Z" fill="#1F5EFF"/>
          <path d="M27.5573 11.3852C24.526 11.3852 22.1147 8.9739 22.1147 5.94258C22.1147 2.91127 24.526 0.5 27.5573 0.5C30.5886 0.5 32.9999 2.91127 32.9999 5.94258C32.9999 8.9739 30.5198 11.3852 27.5573 11.3852ZM27.5573 2.56681C25.6972 2.56681 24.1816 4.08246 24.1816 5.94258C24.1816 7.80271 25.6972 9.31836 27.5573 9.31836C29.4175 9.31836 30.9331 7.80271 30.9331 5.94258C30.9331 4.08246 29.4175 2.56681 27.5573 2.56681Z" fill="#1F5EFF"/>
          <path d="M27.5573 33.5C24.526 33.5 22.1147 31.0887 22.1147 28.0574C22.1147 25.0261 24.526 22.6148 27.5573 22.6148C30.5886 22.6148 32.9999 25.0261 32.9999 28.0574C32.9999 31.0887 30.5198 33.5 27.5573 33.5ZM27.5573 24.6816C25.6972 24.6816 24.1816 26.1973 24.1816 28.0574C24.1816 29.9175 25.6972 31.4332 27.5573 31.4332C29.4175 31.4332 30.9331 29.9175 30.9331 28.0574C30.9331 26.1973 29.4175 24.6816 27.5573 24.6816Z" fill="#1F5EFF"/>
          <path d="M23.0793 27.0929L8.88721 19.9969L9.85173 17.9989L24.1127 25.095L23.0793 27.0929Z" fill="#1F5EFF"/>
          <path d="M9.85173 16.001L8.88721 14.072L23.0793 6.97599L24.1127 8.905L9.85173 16.001Z" fill="#1F5EFF"/>
      </svg>
          <div className="mr-5"></div>
      <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
            <path d="M27.7766 26.5568C27.7766 27.8049 26.7622 28.8575 25.5142 28.8575H7.41057C6.16249 28.8575 5.14815 27.8049 5.14815 26.5568V8.45325C5.14815 7.20517 6.16249 6.22767 7.41057 6.22767H17.9704V4.72033H7.41057C5.3309 4.72033 3.6394 6.375 3.6394 8.45467V26.5568C3.6394 28.6365 5.3309 30.3648 7.41057 30.3648H25.5127C27.5924 30.3648 29.2839 28.6351 29.2839 26.5568V16.0338H27.7752L27.7766 26.5568Z" fill="#1F5EFF"/>
            <path d="M29.4767 4.49083C28.3377 3.35042 26.3501 3.35042 25.2097 4.49083L15.0904 14.6101C14.9941 14.7064 14.9247 14.8283 14.8921 14.96L13.8267 19.2256C13.763 19.482 13.8381 19.754 14.0251 19.9424C14.1682 20.0855 14.3608 20.1634 14.5577 20.1634C14.6187 20.1634 14.6796 20.1563 14.7405 20.1407L19.0075 19.074C19.1407 19.0414 19.2611 18.972 19.3574 18.8757L29.4767 8.75642C30.0462 8.18692 30.3607 7.429 30.3607 6.62292C30.3607 5.81683 30.0476 5.06033 29.4767 4.49083ZM18.4394 17.6616L15.5947 18.3727L16.3059 15.5281L24.677 7.157L26.8105 9.2905L18.4394 17.6616ZM28.4099 7.68967L27.8772 8.22233L25.7437 6.08883L26.2764 5.55617C26.8459 4.98667 27.8404 4.98667 28.4099 5.55617C28.6947 5.84092 28.8519 6.21917 28.8519 6.62292C28.8519 7.02667 28.6947 7.40492 28.4099 7.68967Z" fill="#1F5EFF"/>
      </svg>
    </div>
      </div>

      {/* Name and position */}
      <div className="mt-8 flex flex-col items-center">
        
      </div>

      {/* Post followers */}
      <div className="mt-6 mb-3 flex-col gap-4 md:!gap-14">
        <div className="mb-5 flex flex-row">
        <p className=" justify-left text-[18px] font-[700] text-gray-800">Current Position:</p>
          <p className="ml-20 text-[18px] font-[700] text-gray-600 dark:text-white">Web Developer</p>
        </div>
        <div className="mb-5 flex flex-row">
        <p className=" justify-left text-[18px] font-[700] text-gray-800">Phone Number:</p>
          <p className="ml-20 text-[18px] font-[700] text-gray-600 dark:text-white">
            +233541190955
          </p>
        </div>
        <div className="mb-5 flex flex-row">
        <p className=" justify-left text-[18px] font-[700] text-gray-800">Email:</p>
          <p className="ml-auto text-[18px] font-[700] text-gray-600 dark:text-white">
            calvinphil@gmail.com
          </p>
        </div>
        <div className="flex flex-row">
        <p className="justify-left text-[18px] font-[700] text-gray-800">Internships:</p>
          <p className="ml-auto text-[18px] font-[700] text-gray-600 dark:text-white">
            None
          </p>
        </div>
      </div>
    </Card>
  );
};

export default Profile;
