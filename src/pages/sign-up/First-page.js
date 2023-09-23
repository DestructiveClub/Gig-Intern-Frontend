import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Google from "../../assets/Google.png";
//import { Input } from "@material-tailwind/react";


function SignUp() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    otherName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    bio: "",
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = (field) => {
    if (field === "password") {
      setPasswordVisible(!passwordVisible);
    } else if (field === "confirmPassword") {
      setConfirmPasswordVisible(!confirmPasswordVisible);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  
  

  const handleSubmit = (e) => {
    e.preventDefault();


    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // You can send the form data to your server or perform other actions here
    console.log("Form submitted with data:", formData);
  };

  return (
    <div className="flex min-h-screen">
      <div className="relative w-1/2 ">
        <img
          src="https://jahangirseven.com/socex/wp-content/uploads/sites/24/2020/04/scx03.png"
          alt=""
          className="h-full max-w-full"
        />
        <h1
          className="right-75 bottom-[-40px] helvetica-font absolute  left-1/2   z-10 ml-8 h-[280px] w-[75%] -translate-x-1/2 transform  font-sans text-[30px] font-bold leading-normal text-[#F6FBFF]">
          Discover, Learn and,
          <br />
          Build your skills
          <br />
          while you take on free
          <br />
          Courses
        </h1>
      </div>

      <div className="gap-{20px} flex w-0 flex-col items-start bg-white">
        <div className="flex flex-col space-y-6 bg-white">
          <h1 className="Roboto-font leading-{54.856px} custom-font-settings  text-black ml-6 mt-4 font-sans text-[40px] font-bold not-italic opacity-80">
            Welcome To Gig Intern
          </h1>
          <h2 className="Roboto-font leading-{27.428px} custom-font-settings text-black mb-4 ml-6 font-sans text-[20px] font-normal not-italic opacity-60">
            Create a profile and start building
          </h2>
          <div className="ml-6 mt-4 h-[1px] w-[604px] flex-grow bg-[#D9D9D9]"></div>

          <div className="flex-start flex">
            <div className="ml-6 h-[6px] w-[120px] flex-grow bg-[#1F5EFF]"></div>
            <div className="ml-6 h-[6px] w-[120px] flex-grow bg-[#D9D9D9]"></div>
            <div className="ml-6 h-[6px] w-[120px] flex-grow bg-[#D9D9D9]"></div>
            <div className="ml-6 h-[6px] w-[120px] flex-grow bg-[#D9D9D9]"></div>
          </div>

          <form className=" ml-6">

            <div className="flex-start flex gap-[22px] ">
              <div className="relative mb-4 mt-1 h-[30px] w-[190px]  rounded-lg border border-blue-500 border-opacity-60 bg-white">
                <label
                  htmlFor="text-input"
                  className="[z-10px] bg-white px-2 Roboto-font leading-{19.2px}  text-black absolute  left-[24px]  top-[-12px] w-[116.627px] font-sans text-[14px] font-normal not-italic opacity-80"
                >
                  First Name
                  <input
                    type="text"
                    placeholder="Micheal"
                    className="Roboto-font ml-[-8px] mt-[-6px] flex text-center font-sans text-[14px] font-normal text-[#D9D9D9] outline-none"
                  />
                </label>
              </div>


              <div className="relative mb-4 mt-1 h-[30px] w-[190px]  rounded-lg border border-blue-500 border-opacity-60 bg-white">
                <label
                  htmlFor="text-input"
                  className="[z-10px] bg-white px-3 Roboto-font leading-{19.2px}  text-black absolute  left-[24px]  top-[-12px] w-[116.627px] font-sans text-[14px] font-normal not-italic opacity-80"
                >
                  Last Name
                  <input
                    type="text"
                    placeholder="Owusu"
                    className="Roboto-font ml-[-8px] mt-[-6px] flex text-center font-sans text-[14px] font-normal text-[#D9D9D9] outline-none"
                  />
                </label>
              </div>

              <div className="relative mb-4 mt-1 h-[30px] w-[190px]  rounded-lg border border-blue-500 border-opacity-60 bg-white">
                <label
                  htmlFor="text-input"
                  className="[z-10px] bg-white px-2 Roboto-font leading-{19.2px}  text-black absolute  left-[24px]  top-[-12px] w-[116.627px] font-sans text-[14px] font-normal not-italic opacity-80"
                >
                  Other Name
                  <input
                    type="text"
                    placeholder="Kwasi"
                    className="Roboto-font ml-[-8px] mt-[-6px] flex text-center font-sans text-[14px] font-normal text-[#D9D9D9] outline-none"
                  />
                </label>
              </div>

            </div>

            <div className="flex-start flex gap-[22px] ">
              <div className="relative mb-4 mt-1 h-[30px] w-[295px]  rounded-lg border border-blue-500 border-opacity-60 bg-white">
                <label
                  htmlFor="email"
                  className="[z-10px] bg-white px-2 Roboto-font leading-{19.2px}  text-black absolute  left-[24px]  top-[-12px] w-[116.627px] font-sans text-[14px] font-normal not-italic opacity-80"
                >
                  E-mail
                  <input
                    type="text"
                    placeholder="paasensor@gmial.com"
                    className="Roboto-font ml-4 mt-[-6px] flex text-center font-sans text-[14px] font-normal text-[#D9D9D9] outline-none"
                  />
                </label>
              </div>

              <div className="relative mb-4  h-[30px] w-[293px] rounded-lg border border-blue-500 border-opacity-60 bg-white">
                <label
                  htmlFor="number-input"
                  className="Roboto-font bg-white px-2 leading-{19.2px}  text-black absolute left-[24px] top-[-12px] w-[116.627px] font-sans text-[14px] font-normal not-italic opacity-80"
                >
                  Phone Number
                </label>
                <input
                  type="number"
                  placeholder="0502052267"
                  className="Roboto-font ml-8 mt-1 flex text-center font-sans text-[14px] font-normal text-[#D9D9D9] outline-none"
                />
              </div>
            </div>

            <div className="flex-start flex gap-[21px]">
              <div className="rounded-15 relative mb-4 flex h-[30px] w-[295px] rounded-lg border border-blue-500 border-opacity-60 bg-white">
                <label
                  htmlFor="password"
                  className="Roboto-font bg-white px-2 leading-{19.2px}  text-black absolute left-[24px] top-[-12px] w-[116.627px] font-sans text-[14px] font-normal not-italic opacity-80"
                >
                  Password
                </label>
                <input
                  type={passwordVisible ? "text" : "password"}
                  placeholder=""
                  className="my-6px Roboto-font ml-8 flex text-center font-sans text-[14px] font-normal text-[#D9D9D9] outline-none"
                />

                <svg
                  onClick={() => togglePasswordVisibility("password")}
                  className="absolute right-0 top-0 mr-2 mt-2 "
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="15"
                  viewBox="0 0 21 15"
                  fill="none"
                >
                  <path
                    d="M10.5 4.29552C11.2595 4.29552 11.9879 4.59722 12.5249 5.13425C13.0619 5.67129 13.3636 6.39967 13.3636 7.15915C13.3636 7.91864 13.0619 8.64701 12.5249 9.18405C11.9879 9.72108 11.2595 10.0228 10.5 10.0228C9.74052 10.0228 9.01214 9.72108 8.4751 9.18405C7.93807 8.64701 7.63636 7.91864 7.63636 7.15915C7.63636 6.39967 7.93807 5.67129 8.4751 5.13425C9.01214 4.59722 9.74052 4.29552 10.5 4.29552ZM10.5 6.10352e-05C15.2727 6.10352e-05 19.3486 2.9687 21 7.15915C19.3486 11.3496 15.2727 14.3182 10.5 14.3182C5.72727 14.3182 1.65136 11.3496 0 7.15915C1.65136 2.9687 5.72727 6.10352e-05 10.5 6.10352e-05ZM2.08091 7.15915C2.85242 8.73445 4.05043 10.0617 5.53873 10.99C7.02703 11.9183 8.74592 12.4104 10.5 12.4104C12.2541 12.4104 13.973 11.9183 15.4613 10.99C16.9496 10.0617 18.1476 8.73445 18.9191 7.15915C18.1476 5.58386 16.9496 4.25662 15.4613 3.32832C13.973 2.40002 12.2541 1.90789 10.5 1.90789C8.74592 1.90789 7.02703 2.40002 5.53873 3.32832C4.05043 4.25662 2.85242 5.58386 2.08091 7.15915Z"
                    fill="black"
                    fill-opacity="0.6"
                  />
                </svg>
              </div>

              <div className="rounded-15 relative mb-4 h-[30px] w-[294px] rounded-lg border border-blue-500 border-opacity-60 bg-white">
                <label
                  htmlFor="password"
                  className="Roboto-font bg-white px-1 leading-{19.2px}  text-black absolute left-[24px] top-[-12px] w-[116.627px] font-sans text-[14px] font-normal not-italic opacity-80"
                >
                  Confirm Password
                </label>
                <input
                  type={confirmPasswordVisible ? "text" : "password"}
                  placeholder=""
                  className="my-6px Roboto-font ml-8 flex text-center font-sans text-[14px] font-normal text-[#D9D9D9] outline-none"
                />

                <svg
                  onClick={() => togglePasswordVisibility("confirmPassword")}
                  className="absolute right-0 top-0 mr-2 mt-2 "
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="15"
                  viewBox="0 0 21 15"
                  fill="none"
                >
                  <path
                    d="M10.5 4.29552C11.2595 4.29552 11.9879 4.59722 12.5249 5.13425C13.0619 5.67129 13.3636 6.39967 13.3636 7.15915C13.3636 7.91864 13.0619 8.64701 12.5249 9.18405C11.9879 9.72108 11.2595 10.0228 10.5 10.0228C9.74052 10.0228 9.01214 9.72108 8.4751 9.18405C7.93807 8.64701 7.63636 7.91864 7.63636 7.15915C7.63636 6.39967 7.93807 5.67129 8.4751 5.13425C9.01214 4.59722 9.74052 4.29552 10.5 4.29552ZM10.5 6.10352e-05C15.2727 6.10352e-05 19.3486 2.9687 21 7.15915C19.3486 11.3496 15.2727 14.3182 10.5 14.3182C5.72727 14.3182 1.65136 11.3496 0 7.15915C1.65136 2.9687 5.72727 6.10352e-05 10.5 6.10352e-05ZM2.08091 7.15915C2.85242 8.73445 4.05043 10.0617 5.53873 10.99C7.02703 11.9183 8.74592 12.4104 10.5 12.4104C12.2541 12.4104 13.973 11.9183 15.4613 10.99C16.9496 10.0617 18.1476 8.73445 18.9191 7.15915C18.1476 5.58386 16.9496 4.25662 15.4613 3.32832C13.973 2.40002 12.2541 1.90789 10.5 1.90789C8.74592 1.90789 7.02703 2.40002 5.53873 3.32832C4.05043 4.25662 2.85242 5.58386 2.08091 7.15915Z"
                    fill="black"
                    fill-opacity="0.6"
                  />
                </svg>
              </div>
            </div>

            <div className="relative mb-4 h-[124px] w-[610px] rounded-lg border border-blue-500 border-opacity-60 bg-white">
              <label
                htmlFor="text-input"
                className="Roboto-font bg-white px-4 leading-{19.2px}  text-black absolute left-[24px] top-[-12px] w-[116.627px] font-sans text-[14px] font-normal not-italic opacity-80"
              >
                Bio
              </label>
              <input
                type="text"
                placeholder=""
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                className="my-6px Roboto-font ml-8 flex text-center font-sans text-[14px] font-normal text-[#D9D9D9] outline-none"
              />
            </div>
          </form>

          <div className="ml-6 flex flex-col">
            <NavLink
              to="/interest"
              className="Helvetica-font leading-{23.838px} py-90 rounded-10 flex h-[60px] w-[580px] items-center justify-center gap-[10px]  rounded-md border bg-[#1F5EFF]  px-10 font-sans text-[20px] font-bold  not-italic text-[#F6FBFF] "
            >
              Next
            </NavLink>

            <div className="flex-start mt-4 flex items-center">
              <div className="h-[1px] w-[274px] flex-grow bg-[#29ABFF] bg-opacity-60"></div>
              <h2 className="Roboto-font leading-{19.2px} text-black font-sans text-[14px] font-bold not-italic opacity-80 ">
                OR
              </h2>
              <div className="h-[1px] w-[274px] flex-grow bg-[#29ABFF] bg-opacity-60"></div>
            </div>

            <button
              
              className="py-90 rounded-10 mt-4 flex  h-[60px] w-[580px] items-center justify-center  gap-[10px] rounded-md border   border-blue-500 px-10"
            >
              <img className="h-[20px] w-[22.875px]" src={Google} alt="" />
              <h1 className="Roboto-font leading-{19.2px} text-black mb-16 mt-14 font-sans text-[12px] font-normal not-italic opacity-60">
                continue with Google
              </h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
