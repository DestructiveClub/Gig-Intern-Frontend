import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import Google from '../assets/Google.png';

function SignUp() {
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    otherName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    bio: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation here
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // You can send the form data to your server or perform other actions here
    console.log('Form submitted with data:', formData);
  };

  
  return(
    <div className="flex min-h-screen">
        <div className="w-1/2 relative ">
                <img 
                src="https://jahangirseven.com/socex/wp-content/uploads/sites/24/2020/04/scx03.png" 
                alt="" 
                className="max-w-full h-full"
                />
                <h1 className=' absolute top-1/2 left-1/2 right-[75px] bottom-[68px] transform -translate-x-1/2 ml-8 w-[525px] h-[280px] text-[30px] text-[#F6FBFF]  font-sans helvetica-font leading-normal font-bold z-10'>
                    Discover, Learn and,<br/>
                    Build your skills<br/> 
                    while you take on free<br/> 
                    Courses    
                </h1>
        </div>

        <div className="w-0 flex inline-flex flex-col items-start gap-{20px} ">
            <div className='flex flex-col space-y-6 '>
            <h1 
            className=
            'ml-6 mt-4 text-[40px]  not-italic font-sans Roboto-font font-bold leading-{54.856px} custom-font-settings text-black opacity-80'>
              Welcome To Gig Intern
              </h1>
                    <h2 
                    className=
                    'ml-6 mb-4 text-[20px] not-italic font-sans Roboto-font font-normal leading-{27.428px} custom-font-settings text-black opacity-60'>
                      Create a profile and start building
                      </h2>
                      <div className="flex-grow w-[604px] h-[1px] bg-[#D9D9D9] ml-6 mt-4"></div>

                      <div className='flex flex-start'>
                        <div className="flex-grow w-[120px] h-[6px] bg-[#1F5EFF] ml-6"></div>
                        <div className="flex-grow w-[120px] h-[6px] bg-[#D9D9D9] ml-6"></div>
                        <div className="flex-grow w-[120px] h-[6px] bg-[#D9D9D9] ml-6"></div>
                        <div className="flex-grow w-[120px] h-[6px] bg-[#D9D9D9] ml-6"></div>
                      </div>
                    <form className='ml-6 onSubmit={handleSubmit}'>
                       <div className='flex flex-start  gap-[21px] flex-shrink-0'> 
                          
                          <div className=" mb-4  bg-white border rounded-lg border-blue-500 border-opacity-60 w-[190px] h-[30px] relative ">
                            <label 
                            htmlFor="text-input" 
                            className="text-[14px] absolute top-[-12px] left-[24px] bg-white bg-cover opacity-90 z-999px not-italic font-sans Roboto-font font-normal leading-{19.2px} focus:outline-none  text-black opacity-80 w-[116.627px]">
                              First Name
                            </label>
                            <input 
                            type="text" 
                            placeholder='Micheal' 
                            className='flex text-center ml-6 mt-1 outline-none text-[14px] text-[#D9D9D9] font-sans Roboto-font font-normal' 
                            
                            />
                          </div>

                          <div className=" mb-4  bg-white border rounded-lg border-blue-500 border-opacity-60 w-[190px] h-[30px] relative">
                            <label 
                            htmlFor="text-input" 
                            className="text-[14px] absolute  top-[-12px] left-[24px] not-italic font-sans Roboto-font font-normal leading-{19.2px} text-black opacity-80 w-[116.627px]">
                              Last Name
                            </label>
                            <input 
                            type="text" 
                            placeholder='Owusu' 
                            className='flex text-center ml-4  outline-none text-[14px] text-[#D9D9D9] font-sans Roboto-font font-normal' 
                            
                            />
                          </div>

                          <div className=" mb-4 bg-white border rounded-lg border-blue-500 border-opacity-60 w-[188px] h-[30px] relative">
                            <label 
                            htmlFor="text-input" 
                            className="text-[14px] absolute  top-[-12px] left-[24px] not-italic font-sans Roboto-font font-normal leading-{19.2px} text-black opacity-80 w-[116.627px]">
                              Other Name
                            </label>
                            <input 
                            type="text" 
                            placeholder='Peprah' 
                            className='flex text-center ml-4 mt-1 outline-none text-[14px] text-[#D9D9D9] font-sans Roboto-font font-normal'
                            
                            />
                          </div>

                        </div>

                        <div className='flex flex-start gap-[22px] '>
                          <div className="relative mb-4 mt-1 bg-white border  rounded-lg border-blue-500 border-opacity-60 w-[295px] h-[30px]">
                            <label 
                            htmlFor="email" 
                            className="absolute  top-[-12px] left-[24px]  [z-10px] text-[14px]  not-italic  font-sans Roboto-font font-normal leading-{19.2px} text-black opacity-80 w-[116.627px]">
                              E-mail
                              </label>
                            <input 
                            type="text" 
                            placeholder='paasensor@gmial.com' 
                            className='flex text-center ml-4 mt-1 outline-none text-[14px] text-[#D9D9D9] font-sans Roboto-font font-normal'
                            />
                          </div>

                          <div className="relative mb-4  bg-white border rounded-lg border-blue-500 border-opacity-60 w-[293px] h-[30px]">
                            <label 
                            htmlFor="number-input" 
                            className="text-[14px] absolute  top-[-12px] left-[24px] not-italic font-sans Roboto-font font-normal leading-{19.2px} text-black opacity-80 w-[116.627px]">
                              Phone Number
                            </label>
                            <input 
                            type="number" 
                            placeholder='0502052267' 
                            className='flex text-center ml-8 mt-1 outline-none text-[14px] text-[#D9D9D9] font-sans Roboto-font font-normal' 
                            
                            />
                          </div>

                        </div>
                        
                        <div className='flex flex-start gap-[21px]'>
                          
                          <div className='flex mb-4 rounded-15 bg-white border rounded-lg border-blue-500 border-opacity-60 w-[295px] h-[30px] relative'>
                            <label 
                            htmlFor="password" 
                            className="text-[14px] absolute  top-[-12px] left-[24px] not-italic font-sans Roboto-font font-normal leading-{19.2px} text-black opacity-80 w-[116.627px]">
                              Password
                            </label>
                            <input 
                            type="password" 
                            placeholder='' 
                            className='flex text-center ml-8 my-6px outline-none text-[14px] text-[#D9D9D9] font-sans Roboto-font font-normal' 
                             />

                            <svg
                            className="absolute top-0 right-0 mt-2 mr-2  " 
                            xmlns="http://www.w3.org/2000/svg"
                            width="21"
                            height="15"
                            viewBox="0 0 21 15"
                            fill="none"
                            >
                            <path
                            d="M10.5 4.29552C11.2595 4.29552 11.9879 4.59722 12.5249 5.13425C13.0619 5.67129 13.3636 6.39967 13.3636 7.15915C13.3636 7.91864 13.0619 8.64701 12.5249 9.18405C11.9879 9.72108 11.2595 10.0228 10.5 10.0228C9.74052 10.0228 9.01214 9.72108 8.4751 9.18405C7.93807 8.64701 7.63636 7.91864 7.63636 7.15915C7.63636 6.39967 7.93807 5.67129 8.4751 5.13425C9.01214 4.59722 9.74052 4.29552 10.5 4.29552ZM10.5 6.10352e-05C15.2727 6.10352e-05 19.3486 2.9687 21 7.15915C19.3486 11.3496 15.2727 14.3182 10.5 14.3182C5.72727 14.3182 1.65136 11.3496 0 7.15915C1.65136 2.9687 5.72727 6.10352e-05 10.5 6.10352e-05ZM2.08091 7.15915C2.85242 8.73445 4.05043 10.0617 5.53873 10.99C7.02703 11.9183 8.74592 12.4104 10.5 12.4104C12.2541 12.4104 13.973 11.9183 15.4613 10.99C16.9496 10.0617 18.1476 8.73445 18.9191 7.15915C18.1476 5.58386 16.9496 4.25662 15.4613 3.32832C13.973 2.40002 12.2541 1.90789 10.5 1.90789C8.74592 1.90789 7.02703 2.40002 5.53873 3.32832C4.05043 4.25662 2.85242 5.58386 2.08091 7.15915Z" fill="black" fill-opacity="0.6"/>
                            </svg>

                          </div>

                          <div className='mb-4 rounded-15 bg-white border rounded-lg border-blue-500 border-opacity-60 w-[294px] h-[30px] relative'>
                            <label 
                            htmlFor="password" 
                            className="text-[14px] absolute  top-[-12px] left-[24px] not-italic font-sans Roboto-font font-normal leading-{19.2px} text-black opacity-80 w-[116.627px]">
                              Confirm Password
                            </label>
                            <input 
                            type="password" 
                            placeholder='' 
                            className='flex text-center ml-8 my-6px outline-none text-[14px] text-[#D9D9D9] font-sans Roboto-font font-normal' 
                            />

<svg
                            className="absolute top-0 right-0 mt-2 mr-2  " 
                            xmlns="http://www.w3.org/2000/svg"
                            width="21"
                            height="15"
                            viewBox="0 0 21 15"
                            fill="none"
                            >
                            <path
                            d="M10.5 4.29552C11.2595 4.29552 11.9879 4.59722 12.5249 5.13425C13.0619 5.67129 13.3636 6.39967 13.3636 7.15915C13.3636 7.91864 13.0619 8.64701 12.5249 9.18405C11.9879 9.72108 11.2595 10.0228 10.5 10.0228C9.74052 10.0228 9.01214 9.72108 8.4751 9.18405C7.93807 8.64701 7.63636 7.91864 7.63636 7.15915C7.63636 6.39967 7.93807 5.67129 8.4751 5.13425C9.01214 4.59722 9.74052 4.29552 10.5 4.29552ZM10.5 6.10352e-05C15.2727 6.10352e-05 19.3486 2.9687 21 7.15915C19.3486 11.3496 15.2727 14.3182 10.5 14.3182C5.72727 14.3182 1.65136 11.3496 0 7.15915C1.65136 2.9687 5.72727 6.10352e-05 10.5 6.10352e-05ZM2.08091 7.15915C2.85242 8.73445 4.05043 10.0617 5.53873 10.99C7.02703 11.9183 8.74592 12.4104 10.5 12.4104C12.2541 12.4104 13.973 11.9183 15.4613 10.99C16.9496 10.0617 18.1476 8.73445 18.9191 7.15915C18.1476 5.58386 16.9496 4.25662 15.4613 3.32832C13.973 2.40002 12.2541 1.90789 10.5 1.90789C8.74592 1.90789 7.02703 2.40002 5.53873 3.32832C4.05043 4.25662 2.85242 5.58386 2.08091 7.15915Z" fill="black" fill-opacity="0.6"/>
                            </svg>
                          </div>

                        </div>

                        <div className='mb-4 relative bg-white border rounded-lg border-blue-500 border-opacity-60 w-[610px] h-[124px]'>
                            <label 
                            htmlFor="text-input" 
                            className="text-[14px] absolute  top-[-12px] left-[24px] not-italic font-sans Roboto-font font-normal leading-{19.2px} text-black opacity-80 w-[116.627px]">
                              Bio
                            </label>
                            <input 
                            type="text" 
                            placeholder=''
                            name="bio"
                            value={formData.bio}
                            onChange={handleChange} 
                            className='flex text-center ml-8 my-6px outline-none text-[14px] text-[#D9D9D9] font-sans Roboto-font font-normal' 
                            />
                        </div>
                        
                        
                    </form>

                    <div className='flex flex-col ml-6'>
                      
                        <div className='flex py-90 px-10  justify-center items-center gap-[10px]  rounded-10 border rounded-md bg-[#1F5EFF]  w-[580px] h-[60px]'>
                          <NavLink to="/interest"
                            
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
                            <img className='w-[22.875px] h-[20px]'src={Google} alt="" />
                            <h1 className="text-[12px] mt-14 not-italic font-sans Roboto-font font-normal leading-{19.2px} text-black opacity-60 mb-16">continue with Google</h1>
                        </div>

                       

                    </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp;