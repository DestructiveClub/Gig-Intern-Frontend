import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Google from "../../assets/Google.png";

function SignUp () {
  const [ firstNameFocus, setFirstNameFocus ] = useState(false);
  const [ lastNameFocus, setLastNameFocus ] = useState(false);
  const [ otherNameFocus, setOtherNameFocus ] = useState(false);
  const [ emailFocus, setEmailFocus ] = useState(false);
  const [ passwordFocus, setPasswordFocus ] = useState(false);
  const [ confirmPasswordFocus, setConfirmPasswordFocus ] = useState(false);
  const [ phoneNumberFocus, setPhoneNumberFocus ] = useState(false);
  const [ bioFocus, setBio ] = useState(false);
  // const [ lastName , setLastNameValue ] = useState('');

  const [ formData, setFormData ] = useState({
    firstName: "",
    lastName: "",
    otherName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    bio: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // You can send the form data to your server or perform other actions here
    console.log("Form submitted with data:", formData);
  };

  const handleFormFocus = (inputNameValue) => {
    if (inputNameValue === 'firstName')
      setFirstNameFocus(true);
    else if (inputNameValue === 'lastName')
      setLastNameFocus(true);
    else if (inputNameValue === 'otherName')
      setOtherNameFocus(true);
    else if (inputNameValue === 'email')
      setEmailFocus(true);
    else if (inputNameValue === 'phoneNumber')
      setPhoneNumberFocus(true);
    else if (inputNameValue === 'password')
      setPasswordFocus(true);
    else if (inputNameValue === 'confirmPassword')
      setConfirmPasswordFocus(true);
    else if (inputNameValue === 'bio')
      setBio(true);

  };


  const handleFormBlur = (inputNameValue) => {
    if (inputNameValue === 'firstName')
      setFirstNameFocus(false);
    else if (inputNameValue === 'lastName')
      setLastNameFocus(false);
    else if (inputNameValue === 'otherName')
      setOtherNameFocus(false);
    else if (inputNameValue === 'email')
      setEmailFocus(false);
    else if (inputNameValue === 'phoneNumber')
      setPhoneNumberFocus(false);
    else if (inputNameValue === 'password')
      setPasswordFocus(false);
    else if (inputNameValue === 'confirmPassword')
      setConfirmPasswordFocus(false);
    else if (inputNameValue === 'bio')
      setBio(false);
  };


  const handleFormValueChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [ name ]: value
    }));
  };


  return (
    <div className="flex min-h-screen " >
      <div className="relative w-1/2">
        <img
          src="https://jahangirseven.com/socex/wp-content/uploads/sites/24/2020/04/scx03.png"
          alt=""
          className="h-cover max-w-full"
        />
        <h1 className="right-75 helvetica-font absolute bottom-[-40px]  left-1/2   z-10 ml-8 h-[280px] w-[75%] -translate-x-1/2 transform  font-sans text-[30px] font-bold leading-normal text-[#F6FBFF]">
          Discover, Learn and,
          <br />
          Build your skills
          <br />
          while you take on free
          <br />
          Courses
        </h1>
      </div>

      <div className="gap-{20px}  max-h-full md:w-[50%] w-[50%] flex  items-start bg-white">
        <div className="flex flex-col space-y-6 bg-white">
          <h1 className="Roboto-font leading-{54.856px} custom-font-settings  text-black ml-6 mt-4 font-sans text-[40px] font-bold not-italic opacity-80">
            Welcome To Gig Intern
          </h1>
          <h2 className="Roboto-font leading-{27.428px} custom-font-settings text-black mb-4 ml-6 font-sans text-[20px] font-normal not-italic opacity-60">
            Create a profile and start building
          </h2>
          <div className="ml-6 mt-4 h-[1px] w-[604px] flex-grow bg-gray-600"></div>

          <div className="flex-start flex">
            <div className="ml-6 h-[6px] w-[120px] flex-grow rounded-md bg-blue-400"></div>
            <div className="ml-6 h-[6px] w-[120px] flex-grow rounded-md bg-gray-600"></div>
            <div className="ml-6 h-[6px] w-[120px] flex-grow rounded-md bg-gray-600"></div>
            <div className="ml-6 h-[6px] w-[120px] flex-grow rounded-md bg-gray-600"></div>
          </div>

          <form onSubmit={ handleSubmit } className=" flex-col flex gap-[22px] ml-6">
            <div className="flex-start flex gap-[22px] ">
              <label className={ `relative` }>
                <input
                  type="text"
                  name="firstName"
                  value={ formData.firstName }
                  onChange={ handleFormValueChange }
                  className={ `h-10 w-full rounded-lg border px-3 py-3 text-gray-800 focus:outline-none ${firstNameFocus ? "border-blue-400" : "border-gray-300"
                    }` }
                  onFocus={ () => handleFormFocus('firstName') }
                  onBlur={ () => handleFormBlur('firstName') }
                />
                <span
                  className={ `absolute left-2 top-2 text-opacity-80 transition-all ${firstNameFocus || formData.firstName
                    ? "top-[-12px] bg-white px-2 text-xs text-blue-400"
                    : "text-base text-gray-600 text-opacity-80"
                    }` }
                >
                  First Name
                </span>
              </label>

              <label className={ `relative` }>
                <input
                  type="text"
                  name="lastName"
                  value={ formData.lastName }
                  onChange={ handleFormValueChange }
                  className={ `h-10 w-full rounded-lg border px-3 py-3 text-gray-800 focus:outline-none ${lastNameFocus ? "border-blue-400" : "border-gray-300"
                    }` }
                  onFocus={ () => handleFormFocus('lastName') }
                  onBlur={ () => handleFormBlur('lastName') }
                />
                <span
                  className={ `absolute left-2 top-2 text-opacity-80 transition-all ${lastNameFocus || formData.lastName
                    ? "top-[-12px] bg-white px-2 text-xs text-blue-400"
                    : "text-base text-gray-600 text-opacity-80"
                    }` }
                >
                  Last Name
                </span>
              </label>

              <label className={ `relative` }>
                <input
                  type="text"
                  name="otherName"
                  value={ formData.otherName }
                  onChange={ handleFormValueChange }
                  className={ `h-10 w-full rounded-lg border px-3 py-3 text-gray-800 focus:outline-none ${lastNameFocus ? "border-blue-400" : "border-gray-300"
                    }` }
                  onFocus={ () => handleFormFocus('otherName') }
                  onBlur={ () => handleFormBlur('otherName') }
                />
                <span
                  className={ `absolute left-2 top-2 text-opacity-80 transition-all ${otherNameFocus || formData.otherName
                    ? "top-[-12px] bg-white px-2 text-xs text-blue-400"
                    : "text-base text-gray-600 text-opacity-80"
                    }` }
                >
                  Other Name
                </span>
              </label>
            </div>

            <div className="flex-start flex gap-[22px] ">
              <label className={ `relative` }>
                <input
                  type="email"
                  name="email"
                  value={ formData.email }
                  onChange={ handleFormValueChange }
                  className={ `h-10 w-full rounded-lg border px-3 py-3 text-gray-800 focus:outline-none ${emailFocus ? "border-blue-400" : "border-gray-300"
                    }` }
                  onFocus={ () => handleFormFocus('email') }
                  onBlur={ () => handleFormBlur('email') }
                />
                <span
                  className={ `absolute left-2 top-2 text-opacity-80 transition-all ${emailFocus || formData.email
                    ? "top-[-12px] bg-white px-2 text-xs text-blue-400"
                    : "text-base text-gray-600 text-opacity-80"
                    }` }
                >
                  Email
                </span>
              </label>


              <label className={ `relative` }>
                <input
                  type="number"
                  name="phoneNumber"
                  value={ formData.phoneNumber }
                  onChange={ handleFormValueChange }
                  className={ `h-10 w-full rounded-lg border px-3 py-3 text-gray-800 focus:outline-none ${phoneNumberFocus ? "border-blue-400" : "border-gray-300"
                    }` }
                  onFocus={ () => handleFormFocus('phoneNumber') }
                  onBlur={ () => handleFormBlur('phoneNumber') }
                />
                <span
                  className={ `absolute left-2 top-2 text-opacity-80 transition-all ${phoneNumberFocus || formData.phoneNumber
                    ? "top-[-12px] bg-white px-2 text-xs text-blue-400"
                    : "text-base text-gray-600 text-opacity-80 text['Hello']"
                    }` }
                >
                  Phone Number
                </span>
              </label>
            </div>

            <div className="flex-start flex gap-[21px]">
              <label className={ `relative` }>
                <input
                  type="text"
                  name="password"
                  value={ formData.password }
                  onChange={ handleFormValueChange }
                  className={ `h-10 w-full rounded-lg border px-3 py-3 text-gray-800 focus:outline-none ${passwordFocus ? "border-blue-400" : "border-gray-300"
                    }` }
                  onFocus={ () => handleFormFocus('password') }
                  onBlur={ () => handleFormBlur('password') }
                />
                <span
                  className={ `absolute left-2 top-2 text-opacity-80 transition-all ${passwordFocus || formData.password
                    ? "top-[-12px] bg-white px-2 text-xs text-blue-400"
                    : "text-base text-gray-600 text-opacity-80"
                    }` }
                >
                  Password
                </span>
                <svg
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
              </label>


              <label className={ `relative` }>
                <input
                  type="text"
                  name="confirmPassword"
                  value={ formData.confirmPassword }
                  onChange={ handleFormValueChange }
                  className={ `h-10 w-full rounded-lg border px-3 py-3 text-gray-800 focus:outline-none ${confirmPasswordFocus ? "border-blue-400" : "border-gray-300"
                    }` }
                  onFocus={ () => handleFormFocus('confirmPassword') }
                  onBlur={ () => handleFormBlur('confirmPassword') }
                />
                <span
                  className={ `absolute left-2 top-2 text-opacity-80 transition-all ${confirmPasswordFocus || formData.confirmPassword
                    ? "top-[-12px] bg-white px-2 text-xs text-blue-400"
                    : "text-base text-gray-600 text-opacity-80"
                    }` }
                >
                  Confirm Password
                </span>
                <svg
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
              </label>
            </div>

            <div className="flex-start flex">
              <label className={ `relative mb-4 h-[124px] w-[610px] rounded-lg border ` }>
                <textarea
                  type="text"
                  name="bio"
                  placeholder={ `${!bioFocus ? `\nI am a software engineer` : ""}` }
                  value={ formData.bio }
                  onChange={ handleFormValueChange }
                  className={ `h-full w-full rounded-lg border px-3 py-3 text-gray-800 focus:outline-none ${bioFocus ? "border-blue-400" : "border-gray-300"
                    }` }
                  onFocus={ () => handleFormFocus('bio') }
                  onBlur={ () => handleFormBlur('bio') }
                />
                <span
                  className={ `absolute left-2 top-2 text-opacity-80 transition-all ${bioFocus || formData.bio
                    ? "top-[-12px] bg-white px-2 text-xs text-blue-400"
                    : "text-base text-gray-600 text-opacity-80 text['Hello']"
                    }` }
                >
                  { "\t Bio" }
                </span>
              </label>

            </div>
          </form>

          <div className="ml-6 flex flex-col">
            <NavLink
              to="/interest"
              // onClick={ handleSubmit }
              className="Helvetica-font leading-{23.838px} py-90 rounded-10 flex h-[60px] w-[580px] items-center justify-center gap-[10px]  rounded-md border bg-blue-500  px-10 font-sans text-[20px] font-bold  not-italic text-[#F6FBFF] "
            >
              Next
            </NavLink>

            <div className="flex-start mt-4 flex items-center">
              <div className="h-[1px] w-[274px] flex-grow bg-blue-500 bg-opacity-60"></div>
              <h2 className="Roboto-font leading-{19.2px} text-black font-sans text-[14px] font-bold not-italic opacity-80 ">
                OR
              </h2>
              <div className="h-[1px] w-[274px] flex-grow bg-blue-500 bg-opacity-60"></div>
            </div>

            <button className="py-90 rounded-10 mt-4 flex  h-[60px] w-[580px] items-center justify-center  gap-[10px] rounded-md border   border-blue-500 px-10">
              <img className="h-[20px] w-[22.875px]" src={ Google } alt="" />
              <h1 className="Roboto-font leading-{19.2px} text-black mb-16 mt-14 font-sans text-[12px] font-normal not-italic opacity-60">
                continue with Google
              </h1>
            </button>
          </div>
        </div>
      </div >
    </div >
  );
}

export default SignUp;
