import React from 'react';
import unsplash from '../assets/unsplash.png';

import Vector from '../assets/Vector.png';
import { NavLink } from 'react-router-dom';

const TermsCondition = () => {
    return(
        <div className="flex min-h-screen">
             <div className="w-1/2 relative ">
                <img 
                src={unsplash} 
                alt="" 
                className="max-w-full h-full"
                />
                <h1 className=' absolute top-1/2 left-1/2 right-75 bottom-68 transform -translate-x-1/2 ml-8 w-[525px] h-[280px] text-[30px] text-[#F6FBFF]  font-sans helvetica-font leading-normal font-bold z-10'>
                    Discover, Learn and,<br/>
                    Build your skills<br/> 
                    while you take on free<br/> 
                    Courses    
                </h1>
              </div>

              <div className="w-1/2 flex inline-flex flex-col items-start  ">
              <div className='flex flex-col  '>
              
            <NavLink to ='/courses'>
             <img 
             className='absolute ml-6 mt-4'
             src={Vector} 
             alt='' 
             />
          </NavLink>

                  <div className='relative'>
                    <h1 
                    className=
                    'absolute ml-6 mt-4 text-[40px]  not-italic font-sans Roboto-font font-bold leading-{54.856px} custom-font-settings text-black opacity-80'>
                     Terms and Conditions
                     </h1>
                    
                    <h2 
                    className=
                    'ml-6 mt-4 text-[20px] not-italic font-sans Roboto-font font-normal leading-{27.428px} custom-font-settings text-black opacity-60'>
                      Take a few minutes to go through our services
                      </h2>
                    </div>

                    <div className="flex-grow w-[604px] h-[1px] bg-[#D9D9D9] ml-6 mb-6"></div>

                      <div className='flex flex-start mt-[10px]'>
                        <div className="flex-grow w-[140px] h-[6px] bg-[#1F5EFF] ml-6"></div>
                        <div className="flex-grow w-[140px] h-[6px] bg-[#1F5EFF] ml-6"></div>
                        <div className="flex-grow w-[140px] h-[6px] bg-[#1F5EFF] ml-6"></div>
                        <div className="flex-grow w-[140px] h-[6px] bg-[#1F5EFF] ml-6"></div>
                      </div>

                    <div className='relative mb-4'>
                      <div className='mt-12 absolute top-[28px] flex inline-flex justify-center items-center w-[564px] h-[60px] flex-start gap-[24px] ml-6 '>
                          
                        <div className='flex   justify-center items-center gap-[10px]  rounded-10 border rounded-md bg-[#FFF]  w-[270px] h-[60px]'>
                          <button type='submit'
                            
                          className="text-[20px] not-italic font-sans Helvetica-font font-bold leading-{25.838px} text-[#1F5EFF] ">
                            Decline
                          </button>  
                        </div>

                        <div className='flex   justify-center items-center gap-[10px]  rounded-10 border rounded-md bg-[#1F5EFF]  w-[270px] h-[60px]'>
                          <button type='submit'
                            
                          className="text-[20px] not-italic font-sans Helvetica-font font-bold leading-{23.838px} text-[#F6FBFF] ">
                            Accept
                          </button>  
                        </div>
                         
                      </div>
                    </div>
                    

                    

                    
            </div>
              </div>
        </div>
    )
}

export default TermsCondition;
