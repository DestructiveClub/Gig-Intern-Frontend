import { NavLink } from "react-router-dom";
import Google from "../../assets/Google.png";
import { useCustomStates } from "../../components/UseStates.jsx";
import Input from "components/fields/Input";


function SignUp () {
  const {
    samePass,
    formData,
    handleSubmit,
    handleFormValueChange
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
              <Input
                type="text"
                name="firstName"
                formData={ formData }
                value={ formData.firstName }
                onChange={ handleFormValueChange }
                inputField="First Name"
              />
              <Input
                type="text"
                name="lastName"
                formData={ formData }
                value={ formData.lastName }
                onChange={ handleFormValueChange }
                inputField="Last Name"
              />

              <Input
                type="text"
                name="otherName"
                formData={ formData }
                value={ formData.otherName }
                onChange={ handleFormValueChange }
                inputField="Other Name"
              />
            </div>

            <div className="flex-start flex gap-[22px] px-2 ">
              <Input
                type="email"
                name="email"
                value={ formData.email }
                onChange={ handleFormValueChange }
                inputField="Email"
                required={ true }
              />
              <Input
                type="number"
                name="phoneNumber"
                value={ formData.phoneNumber }
                onChange={ handleFormValueChange }
                inputField="Phone Number"
                required={ true }
              />
            </div>

            <div className="flex-start flex gap-[21px]">

              <div className="relative flex-grow w-full">
                <Input
                  type="password"
                  name="password"
                  value={ formData.password }
                  onChange={ handleFormValueChange }
                  inputField="Password"
                  authPass={ samePass }
                >
                </Input>
                { !samePass ? <p className="text-[14px] text-red-600 flex flex-col mb-[-10px]"> Passwords do not match</p> : <div className="my-[10px]"></div> }
              </div>

              <div className="relative flex-grow w-full">

                <Input
                  type="password"
                  name="confirmPassword"
                  value={ formData.confirmPassword }
                  onChange={ handleFormValueChange }
                  inputField="Confirm Password"
                  authPass={ samePass }
                >
                </Input>
                { !samePass ? <p className="text-[14px] text-red-600 flex flex-col mb-[-10px]"> Passwords do not match</p> : <div className="my-[10px]"></div> }
              </div>
            </div>

            <div className="flex-start flex">
              <Input
                htmlTag="textarea"
                type="text"
                name="bio"
                placeholder={ `\nI am a software Engineer` }
                value={ formData.bio }
                onChange={ handleFormValueChange }
                inputField="Bio"
              >
              </Input>
            </div>
          </form>

          <div className="ml-6 flex flex-col items-center">
            <button
              onClick={ handleSubmit }
            >

              <NavLink
                to={ formData.password === formData.confirmPassword ? "/interest" : "" }
                className="Helvetica-font leading-{23.838px} mt-[-8px] py-90 rounded-10 flex h-[50px] w-[500px] items-center justify-center gap-[5px]  rounded-md border bg-blue-500  px-10 font-sans text-[20px] font-bold  not-italic text-white"
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
