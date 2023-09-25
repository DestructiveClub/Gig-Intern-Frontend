import { NavLink } from "react-router-dom";
import Google from "../../assets/Google.png";
import { useCustomStates } from "./UseStates.jsx";
import ToggleIcon from "components/icons/EyeToggleIcon";


function SignUp () {
  const {
    firstNameFocus,
    lastNameFocus,
    otherNameFocus,
    emailFocus,
    passwordFocus,
    confirmPasswordFocus,
    phoneNumberFocus,
    passwordVisibility,
    confirmPasswordVisibility,
    bioFocus,
    samePass,
    formData,
    handleSubmit,
    handleFormFocus,
    handleFormBlur,
    handleFormValueChange,
    handlePasswordVisibility

  } = useCustomStates();


  return (
    <div
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

          <form className=" flex-col flex gap-[22px] ml-6 px-2">
            <div className="flex-start flex gap-[22px] ">
              <label className={ `relative flex flex-grow w-full` }>
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
                    ? "top-[-12px] transition-all ease-in-out duration-[500ms] bg-white px-2 text-xs text-blue-400"
                    : "text-base text-gray-600 text-opacity-80"
                    }` }
                >
                  First Name
                </span>
              </label>

              <label className={ `relative flex flex-grow w-full` }>
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
                    ? "top-[-12px] transition-all ease-in-out duration-[500ms] bg-white px-2 text-xs text-blue-400"
                    : "text-base text-gray-600 text-opacity-80"
                    }` }
                >
                  Last Name
                </span>
              </label>

              <label className={ `relative flex flex-grow w-full` }>
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
                    ? "top-[-12px] transition-all ease-in-out duration-[500ms] bg-white px-2 text-xs text-blue-400"
                    : "text-base text-gray-600 text-opacity-80"
                    }` }
                >
                  Other Name
                </span>
              </label>
            </div>

            <div className="flex-start flex gap-[22px] px-2 ">
              <label className={ `relative w-full flex flex-grow ` }>
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
                    ? "top-[-12px] transition-all ease-in-out duration-[500ms] bg-white px-2 text-xs text-blue-400"
                    : "text-base text-gray-600 text-opacity-80"
                    }` }
                >
                  Email
                </span>
              </label>


              <label className={ `relative w-full flex flex-grow` }>
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
                    ? "top-[-12px] transition-all ease-in-out duration-[500ms] bg-white px-2 text-xs text-blue-400"
                    : "text-base text-gray-600 text-opacity-80 text['Hello']"
                    }` }
                >
                  Phone Number
                </span>
              </label>
            </div>

            <div className="flex-start flex gap-[21px]">

              <div className="relative flex-grow w-full">
                <label className={ `relative flex flex-grow w-full` }>
                  <input
                    type={ passwordVisibility ? "text" : "password" }
                    name="password"
                    value={ formData.password }
                    onChange={ handleFormValueChange }
                    className={ `h-10 w-full rounded-lg border px-3 py-3 text-gray-800 focus:outline-none ${passwordFocus && samePass ? "transition-[border] ease-in duration-[200ms] border-blue-400" : !samePass ? "transition-[border] ease-in duration-[500ms] border-red-600" : "border-gray-300"
                      }` }
                    onFocus={ () => handleFormFocus('passwordFocus') }
                    onBlur={ () => handleFormBlur('passwordFocus') }
                  />
                  <span
                    className={ `absolute left-2 top-2 text-opacity-80 transition-all ${passwordFocus || formData.password
                      ? "top-[-12px] transition-all ease-in-out duration-[500ms] bg-white px-2 text-xs text-blue-400"
                      : "text-base text-gray-600 text-opacity-80"
                      }` }
                  >
                    Password
                  </span>
                  <ToggleIcon
                    visibility={ passwordVisibility }
                    onClick={ () => handlePasswordVisibility('passwordVisibility') }
                  />
                </label>
                { !samePass ? <p className="text-[14px] text-red-600 flex flex-col mb-[-10px]"> Passwords do not match</p> : <div className="my-[10px]"></div> }
              </div>

              <div className="relative flex-grow w-full">

                <label className={ `relative flex flex-grow w-full` }>
                  <input
                    type={ confirmPasswordVisibility ? "text" : "password" }
                    name="confirmPassword"
                    value={ formData.confirmPassword }
                    onChange={ handleFormValueChange }
                    className={ `h-10 w-full rounded-lg border px-3 py-3 text-gray-800 focus:outline-none ${confirmPasswordFocus && samePass ? "border-blue-400" : !samePass ? "border-red-600" : "border-gray-300"
                      }` }
                    onFocus={ () => handleFormFocus('confirmPasswordFocus') }
                    onBlur={ () => handleFormBlur('confirmPasswordFocus') }
                  />
                  <span
                    className={ `absolute left-2 top-2 text-opacity-80 transition-all ${confirmPasswordFocus || formData.confirmPassword
                      ? "top-[-12px] transition-all ease-in-out duration-[500ms] bg-white px-2 text-xs text-blue-400"
                      : "text-base text-gray-600 text-opacity-80"
                      }` }
                  >
                    Confirm Password
                  </span>
                  <ToggleIcon
                    visibility={ confirmPasswordVisibility }
                    onClick={ () => handlePasswordVisibility('confirmPasswordVisibility') }
                  />
                </label>
                { !samePass ? <p className="text-[14px] text-red-600 flex flex-col mb-[-10px]"> Passwords do not match</p> : <div className="my-[10px]"></div> }
              </div>
            </div>

            <div className="flex-start flex">
              <label className={ `relative mb-2 h-[100px]  rounded-lg border  flex flex-grow w-full` }>
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
                    ? "top-[-12px] transition-all ease-in-out duration-[500ms] bg-white px-2 text-xs text-blue-400"
                    : "text-base text-gray-600 text-opacity-80 text['Hello']"
                    }` }
                >
                  { "Bio" }
                </span>
              </label>

            </div>
          </form>

          <div className="ml-6 flex flex-col items-center">
            <button
              onClick={ handleSubmit }
            >

              <NavLink
                to={ formData.password === formData.confirmPassword ? "/interest" : "" }
                className="Helvetica-font leading-{23.838px} py-90 rounded-10 flex h-[50px] w-[500px] items-center justify-center gap-[5px]  rounded-md border bg-blue-500  px-10 font-sans text-[20px] font-bold  not-italic text-white"
              >
                Next
              </NavLink>
            </button>

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
