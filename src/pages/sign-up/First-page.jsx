import { NavLink } from "react-router-dom";
import Google from "../../assets/Google.png";
import { useCustomStates } from "./UseStates.jsx";


function SignUp () {
  const {
    firstNameFocus,
    lastNameFocus,
    otherNameFocus,
    emailFocus,
    passwordFocus,
    confirmPasswordFocus,
    phoneNumberFocus,
    bioFocus,
    formData,
    handleSubmit,
    handleFormFocus,
    handleFormBlur,
    handleFormValueChange

  } = useCustomStates();


  return (
    <div
      onClick={ handleSubmit }
      className="flex pr-4 flex-col md:flex-row max-h-screen bg-white" >
      <div className="relative md:w-1/2 md:flex hidden">
        <img
          src="https://jahangirseven.com/socex/wp-content/uploads/sites/24/2020/04/scx03.png"
          alt=" "
          className="h-full max-w-screen"
        />
        <h1 className="right-75 helvetica-font absolute bottom-[0px]  left-1/2   z-10 ml-8 h-[280px] w-[75%] -translate-x-1/2 transform  font-sans text-[30px] font-bold leading-normal text-[white]">
          Discover, Learn and,
          <br />
          Build your skills
          <br />
          while you take on free
          <br />
          Courses
        </h1>
      </div>

      <div className="gap-{20px}  max-h-full  w-full md:w-[50%] ml-6 items-center justify-center bg-white">
        <div className="flex flex-col space-y-6  bg-white">
          <h1 className="Roboto-font leading-{54.856px} custom-font-settings  text-black ml-6 mt-4 font-sans text-[40px] font-bold not-italic opacity-80">
            Welcome To Gig Intern
          </h1>
          <h2 className="Roboto-font leading-{27.428px} custom-font-settings text-black mb-4 ml-6 font-sans text-[20px] font-normal not-italic opacity-60">
            Create a profile and start building
          </h2>
          <div className="ml-6 mt-4 h-[1px] w-[98%] flex-grow bg-gray-600"></div>

          <div className="flex-start flex">
            <hr className="ml-6 h-[6px] w-[75%] flex-grow rounded-md bg-blue-400" />
            <hr className="ml-6 h-[6px] w-[75%] flex-grow rounded-md bg-gray-600" />
            <hr className="ml-6 h-[6px] w-[75%] flex-grow rounded-md bg-gray-600" />
            <hr className="ml-6 h-[6px] w-[75%] flex-grow rounded-md bg-gray-600" />
          </div>

          <form onSubmit={ handleSubmit } className=" flex-col flex gap-[22px] ml-6 px-2">
            <div className="flex-start flex gap-[22px] ">
              <label className={ `relative` }>
                <input
                  type="text"
                  name="firstName"
                  value={ formData.firstName }
                  onChange={ handleFormValueChange }
                  className={ `h-10 w-full rounded-lg border px-3 py-3 text-gray-800 focus:outline-none ${firstNameFocus ? "border-blue-400" : "border-gray-300"
                    } ` }
                  onFocus={ () => handleFormFocus('firstNameFocus') }
                  onBlur={ () => handleFormBlur('firstNameFocus') }
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
                  onFocus={ () => handleFormFocus('lastNameFocus') }
                  onBlur={ () => handleFormBlur('lastNameFocus') }
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
                  onFocus={ () => handleFormFocus('otherNameFocus') }
                  onBlur={ () => handleFormBlur('otherNameFocus') }
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

            <div className="flex-start flex gap-[22px] px-2 ">
              <label className={ `relative w-full` }>
                <input
                  type="email"
                  name="email"
                  value={ formData.email }
                  onChange={ handleFormValueChange }
                  className={ `h-10 w-full rounded-lg border px-3 py-3 text-gray-800 focus:outline-none ${emailFocus ? "border-blue-400" : "border-gray-300"
                    }` }
                  onFocus={ () => handleFormFocus('emailFocus') }
                  onBlur={ () => handleFormBlur('emailFocus') }
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


              <label className={ `relative w-full` }>
                <input
                  type="number"
                  name="phoneNumber"
                  value={ formData.phoneNumber }
                  onChange={ handleFormValueChange }
                  className={ `h-10 w-full rounded-lg border px-3 py-3 text-gray-800 focus:outline-none ${phoneNumberFocus ? "border-blue-400" : "border-gray-300"
                    }` }
                  onFocus={ () => handleFormFocus('phoneNumberFocus') }
                  onBlur={ () => handleFormBlur('phoneNumberFocus') }
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
                  onFocus={ () => handleFormFocus('passwordFocus') }
                  onBlur={ () => handleFormBlur('passwordFocus') }
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
                  onFocus={ () => handleFormFocus('confirmPasswordFocus') }
                  onBlur={ () => handleFormBlur('confirmPasswordFocus') }
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
              <label className={ `relative mb-2 h-[100px] w-[610px] rounded-lg border ` }>
                <textarea
                  type="text"
                  name="bio"
                  placeholder={ `${!bioFocus ? `\nI am a software engineer` : ""}` }
                  value={ formData.bio }
                  onChange={ handleFormValueChange }
                  className={ `h-full w-full rounded-lg border px-3 py-3 text-gray-800 focus:outline-none ${bioFocus ? "border-blue-400" : "border-gray-300"
                    }` }
                  onFocus={ () => handleFormFocus('bioFocus') }
                  onBlur={ () => handleFormBlur('bioFocus') }
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

          <div className="ml-6 flex flex-col items-center">
            <NavLink
              to="/interest"
              // onClick={ handleSubmit }
              className="Helvetica-font leading-{23.838px} py-90 rounded-10 flex h-[50px] w-[500px] items-center justify-center gap-[5px]  rounded-md border bg-blue-500  px-10 font-sans text-[20px] font-bold  not-italic text-white"
            >
              Next
            </NavLink>

            <div className="flex-start mt-2 flex items-center">
              <div className="h-[1px] w-[274px] flex-grow bg-blue-500 bg-opacity-60"></div>
              <h2 className="p-1 Roboto-font leading-{19.2px} text-gray-900 font-sans text-[14px] bg-white font-black not-italic opacity-80 ">
                OR
              </h2>
              <div className="h-[1px] w-[274px] flex-grow bg-blue-500 bg-opacity-60"></div>
            </div>

            <button className="py-90 rounded-10 my-4 flex  h-[40px] w-[500px] items-center justify-center  gap-[10px] rounded-md border   border-blue-500 px-10">
              <img className="h-[20px] w-[20px]" src={ Google } alt="" />
              <h1 className="Roboto-font justify-center items-center leading-{19.2px} text-gray-900 mb-14 mt-14 font-sans text-[12px] font-bold not-italic opacity-60">
                continue with Google
              </h1>
            </button>
          </div>
        </div>
      </div >
    </div >
  );
};

export default SignUp;
