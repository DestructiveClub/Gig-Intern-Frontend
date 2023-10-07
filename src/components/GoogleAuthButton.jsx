import React, { useEffect } from 'react';
import { FcGoogle } from "react-icons/fc";
import { useCustomStates } from 'components/UseStates';


const GoogleAuthButton = ({ type, id, text }) => {
  const {
    formData,
    // handleFormValueChange
  } = useCustomStates();

  // const [ gapi, setGapi ] = useState(null);
  // const [ user, setUser ] = useState(null);


  const handleGoogleSignInClick = () => {
    // Handle Google Sign-In click here
    // You can use the gapi library or other methods to initiate the sign-in process
    console.log('Google Sign-In button clicked');
    try {
      console.log("User Signed in");
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <button type={ type } id={ id } onClick={ handleGoogleSignInClick } className="rounded-[4px]  py-2 flex justify-center border-[1px] border-blue-200 hover:border-sky-200  hover:bg-sky-100 w-full cursor-pointer">
      <p className="text-gray-600 text-[14px] flex gap-1 justify-center">
        <span className="w-[40px] text-2xl">
          <FcGoogle />
        </span>
        { text }
      </p>
    </button>
  );
};

export default GoogleAuthButton;
