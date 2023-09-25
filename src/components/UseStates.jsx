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
    passwordVisibility: false,
    confirmPasswordVisibility: false
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

  const [ samePass, setSamePass ] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password === formData.confirmPassword) {
      setSamePass(true);
      console.log("Form submitted with data:", formData);
      return;
    }

    setSamePass(false);
    // You can send the form data to your server or perform other actions here

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

  const handleFormValueChange = (name, updatedValue) => {
    // e.preventDefault();
    // console.log(`name is ${name} and value is ${value}`);
    setFormData((prevData) => ({
      ...prevData,
      [ name ]: updatedValue,
    }));
    // console.log(name, value)
  setSamePass(true);
};

const handlePasswordVisibility = (field) => {
  setInitialState((prevData) => ({
    ...prevData,
    [ field ]: !prevData[ field ],
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
  passwordVisibility: initialState.passwordVisibility,
  confirmPasswordVisibility: initialState.confirmPasswordVisibility,
  samePass,
  formData,
  handleSubmit,
  handleFormFocus,
  handleFormBlur,
  handleFormValueChange,
  handlePasswordVisibility
};
};
