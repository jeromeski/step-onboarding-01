import React, { Fragment, useEffect, useRef, useState } from "react";
import Button from "./Button";
import PasswordInput from "./PasswordInput";
import TextInput from "./TextInput";

export default function FormStepOne({ goToNext }) {
  let nameRef = useRef(null);
  let emailRef = useRef(null);
  let email2Ref = useRef(null);
  let genderRef = useRef(null);
  let phoneRef = useRef(null);
  let passwordRef = useRef(null);
  let password2Ref = useRef(null);
  let midNameRef = useRef(null);
  let lastNameRef = useRef(null);

  // useEffect(() => {
  //   const email = emailRef.current;
  //   if (email) {
  //     emailRef.current.focus();
  //   }
  // }, []);

  const data = () => ({
    firstName: nameRef.current.value,
    email: emailRef.current.value,
    email2: email2Ref.current.value,
    gender: genderRef.current.value,
    phone: phoneRef.current.value,
    password: passwordRef.current.value,
    password2: password2Ref.current.value,
    midName: midNameRef.current.value,
    lastName: lastNameRef.current.value
  });

  return (
    <Fragment>
      <TextInput
        type="email"
        id="email"
        placeholder=""
        label="* Email ID"
        ref={emailRef}
      />
      <TextInput
        type="email"
        id="confirmEmail"
        placeholder=""
        label="* Confirm Email ID"
        ref={email2Ref}
      />
      <TextInput
        type="text"
        id="firstName"
        placeholder="First Name (Required)"
        label="* Owner/Representative:"
        ref={nameRef}
      />
      <TextInput
        type="text"
        id="middleName"
        placeholder="Middle Name (Required)"
        ref={midNameRef}
      />
      <TextInput
        type="text"
        id="lastName"
        placeholder="Last Name (Required)"
        ref={lastNameRef}
      />
      <TextInput
        type="text"
        id="gender"
        placeholder="Male"
        label="* Gender"
        ref={genderRef}
      />
      <TextInput
        type="tel"
        id="mobileNo"
        placeholder="09xxxxxxxxx"
        label="* Contact Number"
        ref={phoneRef}
      />
      <PasswordInput id="pword" label="* Password" ref={passwordRef} />
      <PasswordInput
        id="pword2"
        label="* Confirm Password"
        ref={password2Ref}
      />
      <button type="button" onClick={() => goToNext(data())}>
        Next
      </button>
    </Fragment>
  );
}

/*
<TextInput type="email" id="email" placeholder="" label="* Email ID" />
        <TextInput
          type="email"
          id="confirmEmail"
          placeholder=""
          label="* Confirm Email ID"
        />
        <TextInput
          type="text"
          id="firstName"
          placeholder="First Name (Required)"
          label="* Owner/Representative:"
        />
        <TextInput
          type="text"
          id="middleName"
          placeholder="Middle Name (Required)"
        />
        <TextInput
          type="text"
          id="lastName"
          placeholder="Last Name (Required)"
        />
        <TextInput
          type="text"
          id="gender"
          placeholder="Male"
          label="* Gender"
        />
        <TextInput
          type="tel"
          id="phone"
          placeholder="09xxxxxxxxx"
          label="* Contact Number"
        />
        <PasswordInput id="password" label="* Password" />
        <PasswordInput id="password2" label="* Confirm Password" />
        <button type="submit">submit</button>
*/
