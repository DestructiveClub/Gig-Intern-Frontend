import { useState } from "react";

export const useCustomStates = () => {

  const [ initialState, setInitialState ] = useState({
    firstNameFocus: false,
    lastNameFocus: false,
    otherNameFocus: false,
    emailFocus: false,
    passwordFocus: false,
    confirmPasswordFocus: false,
    phoneNumberFocus: false,
    bioFocus: false,
  });

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
    setInitialState((prevData) => ({
      ...prevData,
      [ inputNameValue ]: true,
    }));
  };

  const handleFormBlur = (inputNameValue) => {
    setInitialState((prevData) => ({
      ...prevData,
      [ inputNameValue ]: false,
    }));
  };

  const handleFormValueChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [ name ]: value,
    }));
  };



  return {
    firstNameFocus: initialState.firstNameFocus,
    lastNameFocus: initialState.lastNameFocus,
    otherNameFocus: initialState.otherNameFocus,
    emailFocus: initialState.emailFocus,
    passwordFocus: initialState.passwordFocus,
    confirmPasswordFocus: initialState.confirmPasswordFocus,
    phoneNumberFocus: initialState.phoneNumberFocus,
    bioFocus: initialState.bioFocus,
    formData,
    handleSubmit,
    handleFormFocus,
    handleFormBlur,
    handleFormValueChange
  };
};
