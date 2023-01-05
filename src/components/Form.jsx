import React from "react";
import { useState } from "react";

function Form(props) {
  const [formState, setFormState] = useState({});
  const [formErrors, setFormErrors] = useState({});
  console.info("formState", formState);
  console.info("formErrors", formErrors);
  const handleSubmit = () => {
    // console.log("formState");
    // console.log(formState);
    // console.log("formErrors");
    // console.log(formErrors);
    let errorArray=[];
    
    for (const key in formErrors) {
      if (Object.hasOwnProperty.call(formErrors, key)) {
        console.log(key);
        errorArray.push(key);
      }}
      console.log(errorArray.length);
if (errorArray.length === 4) {
  console.log("All fields are filled");
  for (const key in formErrors) {
    if (Object.hasOwnProperty.call(formErrors, key)) {
      const error = formErrors[key];
      if(error !== ""){
        console.log("Error in form");
        return
      }
    }
    console.log("Form is valid");
    setFormState({});
    setFormErrors({});
    return
  }
}else{
  console.log("All fields are not filled");
}
  };
//   console.log("formerror ");
//   console.log(formErrors);
  const handleFormErrors = (property, errors) => {
    console.log('property',property);

    console.log('errors', errors);

    setFormErrors({
      ...formErrors,
      [property]: errors,
    });
  };

  const handleFormState = async (property, value) => {
    setFormState({
      ...formState,
      [property]: value,
    });
    handleFormErrorsStates({
      ...formState,
      [property]: value,
    });
  };



const validateUsername = (username) => {
    if (username.length < 4) {
      return true;
    }
    const re = /\s/g;
    return re.test(username);
}
    // console.log('validateUsername');
    


  const validateEmail = (email) => {
    // const re = /\S+@\S+\.\S+/;
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return re.test(email);
  };
  const validatePhoneNumber = (number) => {
    const re = /\d{10}$/;
    return re.test(number);
  };
  const validatePassword = (password) => {
    const blankSpaceRe = /\s/g;
    // console.log('password');
    // console.log(password);
    // console.log('blankSpaceRe');
    // console.log(blankSpaceRe.test(password));
    return !blankSpaceRe.test(password);
    // return re.test(password);
  };

  const handleFormErrorsStates = (formData) => {
    for (const key in formData) {
      if (Object.hasOwnProperty.call(formData, key)) {
        const value = formData[key];
        switch (key) {
          case "username":
            if (validateUsername(value ?? "")) {
              handleFormErrors(

                "username",
                "Username must contain at least 4 characters and cannot contain blank spaces"
              );
            } else {
              handleFormErrors("username", "");

            }
            break;
          case "email":
            if (validateEmail(value ?? "")) {
              handleFormErrors("email", "");
            } else {
              handleFormErrors("email", "Invalid email");
            }
            break;
          case "phone":
            if (validatePhoneNumber(value ?? "")) {
              handleFormErrors("phone", "");
            } else {
              handleFormErrors("phone", "Invalid Phone Number");
            }
            break;
          case "password":
            // console.log("password cha paya");
            // console.log(value); 
            if (validatePassword(value ?? "")) {
              handleFormErrors("password", "");
            } else {
              handleFormErrors(
                "password",
                "Password cannot contain blank spaces and must be at least 8 characters long and must contain at least one uppercase letter, one lowercase letter and one number"
              );
            }
            break;
          default:
            break;
        }
      }
    }

    // check if formState is empty
    // check if data is valid

    // clear formState
  };
  return (
    <div>
      <div>
        <p>Username</p>
        <p>{formErrors.username}</p>
        <input
          type="text"
          onChange={(e) => {
            handleFormState("username", e.target.value);
          }}
        />
        <p>Email</p>
        <p>{formErrors.email}</p>
        <input
          type="email"
          // value={formState.email}
          onChange={(e) => {
            handleFormState("email", e.target.value);
          }}
        />
        <p>Phone Number</p>
        <p>{formErrors.phone}</p>
        <input
          type="number"
          // value={formState.number}
          onChange={(e) => {
            handleFormState("phone", e.target.value);
          }}
        />
        <p>Password</p>
        <p>{formErrors.password}</p>
        <input
          type="password"
          maxLength={16}
          // value={formState.password}
          onChange={(e) => {
            handleFormState("password", e.target.value);
          }}
        />
        <button onClick={handleSubmit} >Submit</button>
      </div>
    </div>
  );
}

export default Form;
