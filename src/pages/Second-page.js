import React from 'react';
import { NavLink } from 'react-router-dom';
import Google from '../assets/Google.png';
import unsplash from '../assets/unsplash.png';
import Vector from '../assets/Vector.png';
const InterestPage = () => {
    
    
  
  return(
        <div className="flex min-h-screen overflow-y-hidden">
    
          <div className="w-1/2 relative ">
                <img 
                src={unsplash} 
                alt="" 
                className="max-w-full h-full"
                />
                <h1 className=' absolute top-1/2 left-1/2 right-75 bottom-68 transform -translate-x-1/2 ml-8 w-[75%] h-[280px] text-[30px] text-[#F6FBFF] font-sans helvetica-font leading-normal font-bold z-10'>
                    Discover, Learn and,<br/>
                    Build your skills<br/> 
                    while you take on free<br/> 
                    Courses    
                </h1>
          </div>

        <div className="w-1/2 flex inline-flex flex-col items-start gap-{30px}  ">
            <div className='flex flex-col space-y-6 '>

            <NavLink to='/signup'> 
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
                      Select your roles and interests
                      </h2>
                    <div className="flex-grow w-[580px] h-[1px] bg-[#D9D9D9] ml-6"></div>

                      <div className='flex flex-start'>
                        <div className="flex-grow w-[120px] h-[6px] bg-[#1F5EFF] ml-6"></div>
                        <div className="flex-grow w-[120px] h-[6px] bg-[#1F5EFF] ml-6"></div>
                        <div className="flex-grow w-[120px] h-[6px] bg-[#D9D9D9] ml-6"></div>
                        <div className="flex-grow w-[120px] h-[6px] bg-[#D9D9D9] ml-6"></div>
                      </div>

                      <div className='ml-6'>
                        <div className=" mb-4 relative bg-white border rounded-lg border-blue-500 border-opacity-60 w-[580px] h-[60px]">
                            <label 
                            htmlFor="text-input" 
                            className="text-[14px] absolute  top-[-12px] left-[24px] not-italic font-sans Roboto-font font-normal leading-{19.2px} text-black opacity-80 ">
                              Select your role
                              </label>
                            <input 
                            type="text" 
                            placeholder='FullStack Web Developer' 
                            className='flex text-center ml-6 mt-6 outline-none text-[14px] text-[#D9D9D9] font-sans Roboto-font font-normal'  
                            
                            />
                          </div>

                          <h1 className='text-[30px] not-italic font-sans Helvetica-font font-bold custom-font-settings text-black opacity-80 leading-{41.142px}'>
                            Select your interests
                          </h1>
                      </div>

              

                    <form className='ml-6'>
                       <div className='flex flex-start gap-[10px] flex-shrink-0'> 
                          
                          <div className=" mb-4  bg-white border rounded-lg border-blue-500 border-opacity-60 w-[187px] h-[38px]">
                            <text 
                            className="text-[15px]  not-italic font-sf-pro-text ml-4 font-medium  text-[#1F5EFF] "
                            >FrontEnd Development
                            </text>
                            
                          </div>

                          <div className=" mb-4  bg-white border rounded-lg border-blue-500 border-opacity-60 w-[187px] h-[38px]">
                            <text className="text-[15px] not-italic font-sf-pro-text ml-4 font-medium  text-[#1F5EFF] "
                            >BackEndEnd Development
                            </text>
                            
                          </div>

                          <div className=" mb-4  bg-white border rounded-lg border-blue-500 border-opacity-60 w-[187px] h-[38px]">
                            <text className="text-[15px] not-italic font-sf-pro-text ml-4 font-medium  text-[#1F5EFF] "
                            >FullStack Development
                            </text>
                            
                          </div>

                        </div>

                        <div className='flex flex-start gap-[10px] '>
                          
                          <div className=" mb-4  bg-white border rounded-lg border-blue-500 border-opacity-60 w-[187px] h-[38px]">
                            <text className="text-[15px] not-italic font-sf-pro-text ml-4 font-medium  text-[#1F5EFF] "
                            >Product Management
                            </text>
                            
                          </div>

                          <div className=" mb-4  bg-white border rounded-lg border-blue-500 border-opacity-60 w-[187px] h-[38px]">
                            <text className="text-[15px] not-italic font-sf-pro-text ml-4 font-medium  text-[#1F5EFF] "
                            >Product Design
                            </text>
                            
                          </div>

                          <div className=" mb-4  bg-white border rounded-lg border-blue-500 border-opacity-60 w-[187px] h-[38px]">
                            <text className="text-[15px] not-italic font-sf-pro-text ml-4 font-medium  text-[#1F5EFF] "
                            >UI/UX Design
                            </text>
                            
                          </div>

                        </div>
                        
                        <div className='flex flex-start gap-[10px]'>
                          
                          <div className=" mb-4  bg-white border rounded-lg border-blue-500 border-opacity-60 w-[187px] h-[38px]">
                            <text className="text-[15px] not-italic font-sf-pro-text ml-4 font-medium  text-[#1F5EFF] "
                            >Content Marketing
                            </text>
                            
                          </div>

                          <div className=" mb-4  bg-white border rounded-lg border-blue-500 border-opacity-60 w-[187px] h-[38px]">
                            <text className="text-[15px] not-italic font-sf-pro-text ml-4 font-medium  text-[#1F5EFF] "
                            >Motion Designer
                            </text>
                            
                          </div>

                          <div className=" mb-4  bg-white border rounded-lg border-blue-500 border-opacity-60 w-[187px] h-[38px]">
                            <text className="text-[15px] not-italic font-sf-pro-text ml-4 font-medium  text-[#1F5EFF] "
                            >Copy-Writing
                            </text>
                            
                          </div>

                        </div>

                        <div className='flex flex-start gap-[10px]'>
                          
                          <div className=" mb-4  bg-white border rounded-lg border-blue-500 border-opacity-60 w-[187px] h-[38px]">
                            <text className="text-[15px] not-italic font-sf-pro-text ml-4 font-medium  text-[#1F5EFF] "
                            >Podcast Management
                            </text>
                            
                          </div>

                          <div className=" mb-4  bg-white border rounded-lg border-blue-500 border-opacity-60 w-[187px] h-[38px]">
                            <text className="text-[15px] not-italic font-sf-pro-text ml-4 font-medium  text-[#1F5EFF] "
                            >Mobile App Dev
                            </text>
                            
                          </div>

                          <div className=" mb-4  bg-white border rounded-lg border-blue-500 border-opacity-60 w-[187px] h-[38px]">
                            <text className="text-[15px] not-italic font-sf-pro-text ml-4 font-medium  text-[#1F5EFF] "
                            >Software Development
                            </text>
                            
                          </div>

                        </div>

                        <div className='flex flex-start gap-[10px]'>
                          
                          <div className=" mb-4  bg-white border rounded-lg border-blue-500 border-opacity-60 w-[187px] h-[38px]">
                            <text className="text-[15px] not-italic font-sf-pro-text ml-4 font-medium  text-[#1F5EFF] "
                            >Cyber Security
                            </text>
                            
                          </div>

                          <div className=" mb-4  bg-white border rounded-lg border-blue-500 border-opacity-60 w-[187px] h-[38px]">
                            <text className="text-[15px] not-italic font-sf-pro-text ml-4 font-medium  text-[#1F5EFF] "
                            >Mobile App Dev
                            </text>
                            
                          </div>

                          <div className=" mb-4  bg-white border rounded-lg border-blue-500 border-opacity-60 w-[187px] h-[38px]">
                            <text className="text-[15px] not-italic font-sf-pro-text ml-4 font-medium  text-[#1F5EFF] "
                            >Public Relations
                            </text>
                            
                          </div>

                        </div>
                        
                        
                    </form>

                    <div className='flex flex-col items-center ml-6'>
                        <div className='flex py-90 px-10  justify-center items-center gap-[10px]  rounded-10 border rounded-md bg-[#1F5EFF]  w-[580px] h-[60px]'>
                          <NavLink to="/courses"
                            
                          className="text-[20px] not-italic font-sans Helvetica-font font-bold leading-{23.838px} text-[#F6FBFF] ">
                            Next
                          </NavLink>  
                        </div>

                        <div className="flex flex-start items-center mt-4">
                          <div className="flex-grow w-[274px] h-[1px] bg-[#29ABFF] bg-opacity-60"></div>
                          <h2 className="text-[14px] not-italic font-sans Roboto-font font-bold font-normal leading-{19.2px} text-black opacity-80 ">OR</h2>
                          <div className="flex-grow w-[274px] h-[1px] bg-[#29ABFF] bg-opacity-60"></div>
                        </div>

                        <div className="flex justify-center mt-4 flex py-90 px-10 border-blue-500 justify-center items-center gap-[10px]  rounded-10 border rounded-md   w-[580px] h-[60px]">
                            <img className='w-[22.875px] h-[22.875px]'src={Google} alt="" />
                            <h1 className="text-[14px] mt-14 not-italic font-sans Roboto-font font-normal leading-{19.2px} text-black opacity-60 mb-16">continue with Google</h1>
                        </div>

                    </div>
            </div>
        </div>
    </div>
    )
};
export default InterestPage;