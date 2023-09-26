import Google from "../../assets/Google.png";
import { useCustomStates } from "../../components/UseStates.jsx";
import Input from "components/fields/Input";


function SignUp () {
  const {
    samePass,
    formData,
    handleNavigate,
    handleFormValueChange
  } = useCustomStates();


  // const handleNextClick = () => {
  //   if ((formData.password === formData.confirmPassword)) {
  //     // Navigate to the "/interest" route programmatically
  //   } else {
  //     // Handle form validation errors (e.g., display an error message)
  //   }
  // };
  const classStyle = "sm:text-base text-sm";

  return (
    <div
      className="flex flex-row max-h-screen bg-white" >
      <div className="relative hidden md:w-1/2 md:flex md:max-h-screen md:object-cover ">
        <div>

          <h1 className="right-75 helvetica-font absolute bottom-[0px]  left-1/2 z-10 ml-8 h-[280px] w-[75%] -translate-x-1/2 transform  font-sans text-[30px] font-bold leading-normal text-[white]">
            Discover, Learn and,
            <br />
            Build your skills
            <br />
            while you take on free
            <br />
            Courses
          </h1>
        </div>
        <img
          src="https://jahangirseven.com/socex/wp-content/uploads/sites/24/2020/04/scx03.png"
          alt=" "
          className="object-cover h-screen max-w-full mix-blend-darken"
        />
      </div>

      <div className="items-center justify-center w-full mx-3 bg-white md:h-full md:w-1/2 sm:mx-6 md:mx-3">
        <div className="flex flex-col w-full space-y-6 bg-white">
          <h1 className="mt-4 ml-6 font-sans text-2xl not-italic font-bold text-black Roboto-font sm:text-4xl custom-font-settings opacity-80">
            Welcome To Gig Intern
          </h1>
          <h2 className="Roboto-font  sm:text-xl leading-{27.428px} custom-font-settings text-black  ml-6 font-sans text-md font-normal not-italic opacity-60">
            Create a profile and start building
          </h2>
          <div className=" mt-4 h-[1px] w-[100%] flex-grow bg-gray-600"></div>

          <div className="flex gap-6 flex-start">
            <hr className=" h-[6px] w-[100%] flex-grow rounded-md bg-blue-400" />
            <hr className=" h-[6px] w-[100%] flex-grow rounded-md bg-gray-600" />
            <hr className=" h-[6px] w-[100%] flex-grow rounded-md bg-gray-600" />
            <hr className=" h-[6px] w-[100%] flex-grow rounded-md bg-gray-600" />
          </div>

          <form className=" flex-col flex gap-[22px] px-2 h-full">
            <div className="flex-start flex gap-[22px] ">
              <Input
                type="text"
                name="firstName"
                formData={ formData }
                value={ formData.firstName }
                onChange={ handleFormValueChange }
                inputField="First Name"
                className={ classStyle }
              />
              <Input
                type="text"
                name="lastName"
                formData={ formData }
                value={ formData.lastName }
                onChange={ handleFormValueChange }
                inputField="Last Name"
                className={ classStyle }

              />

              <Input
                type="text"
                name="otherName"
                formData={ formData }
                value={ formData.otherName }
                onChange={ handleFormValueChange }
                inputField="Other Name"
                className={ classStyle }

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
                className={ classStyle }

              />
              <Input
                type="number"
                name="phoneNumber"
                value={ formData.phoneNumber }
                onChange={ handleFormValueChange }
                inputField="Phone Number"
                required={ true }
                className={ classStyle }

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
                  className={ classStyle }

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
                  className={ classStyle }

                >
                </Input>
                { !samePass ? <p className="text-[14px] text-red-600 flex flex-col mb-[-10px]"> Passwords do not match</p> : <div className="my-[10px]"></div> }
              </div>
            </div>

            <div className="flex flex-start">
              <Input
                htmlTag="textarea"
                type="text"
                name="bio"
                placeholder={ `\nI am a software Engineer` }
                value={ formData.bio }
                onChange={ handleFormValueChange }
                inputField="Bio"
                className={ classStyle }

              >
              </Input>
            </div>

            <div className="flex flex-col items-center w-full">
              <button className="w-full" onClick={ () => handleNavigate('/interest') }>
                <div
                  className="Helvetica-font leading-{23.838px} mt-[-8px] py-90 rounded-10 flex h-[50px] w-full items-center justify-center gap-[5px]  rounded-md border bg-blue-500  px-10 font-sans text-[20px] font-bold  not-italic text-white"
                >
                  Next
                </div>
              </button>

              <div className="flex items-center mt-2 flex-start">
                <div className="h-[1px] w-[100%] flex-grow bg-blue-500 bg-opacity-60"></div>
                <h2 className="p-1 Roboto-font leading-{19.2px} text-gray-900 font-sans text-[14px] bg-white font-black not-italic opacity-80 ">
                  OR
                </h2>
                <div className="h-[1px] w-[100%] flex-grow bg-blue-500 bg-opacity-60"></div>
              </div>

              <button className="py-90 rounded-10 my-3 flex  h-[40px] w-[100%] items-center justify-center  gap-[10px] rounded-md border   border-blue-500 px-10">
                <img className="h-[20px] w-[20px]" src={ Google } alt="" />
                <h1 className="Roboto-font justify-center items-center leading-{19.2px} text-gray-900 mb-14 mt-14 font-sans sm:text-base text-sm font-bold not-italic opacity-60">
                  continue with Google
                </h1>
              </button>
            </div>
          </form>
        </div>
      </div >
    </div >
  );
};

export default SignUp;
