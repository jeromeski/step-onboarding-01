import React, { Fragment } from "react";
import Button from "./Button";
import PasswordInput from "./PasswordInput";
import TextInput from "./TextInput";

export default function FormStepOne({ goToNext }) {
  const data = {};

  return (
    <Fragment>
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
      <TextInput type="text" id="lastName" placeholder="Last Name (Required)" />
      <TextInput type="text" id="gender" placeholder="Male" label="* Gender" />
      <TextInput
        type="tel"
        id="mobileNo"
        placeholder="09xxxxxxxxx"
        label="* Contact Number"
      />
      <PasswordInput id="pword" label="* Password" />
      <PasswordInput id="pword2" label="* Confirm Password" />
      <Button type="button" id="next-btn" goToNext={goToNext}>
        Continue
      </Button>
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
