import React, { Fragment } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import CurrentStep from "./CurrentStep";

export default function FormOnboardingFlow({
  children,
  currentIndex,
  onSubmit
}) {
  const currentChild = React.Children.toArray(children)[currentIndex];

  const initialValues = {
    email: "",
    email2: "",
    fName: "",
    mName: "",
    lName: "",
    gender: "",
    mobile: "",
    pword: "",
    pword2: ""
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Required!"),
    description: Yup.string()
      .required("Required!")
      .min(10, "Must be at least 5 to 100 characters")
      .max(50, "Must be at least 5 to 100 characters"),
    selectOption: Yup.string().required("Choose one!"),
    radioOption: Yup.string().required("Choose one!"),
    checkboxOption: Yup.array().min(1, "Choose one!"),
    birthDate: Yup.date().required("Required").nullable()
  });

  if (React.isValidElement(currentChild)) {
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => <Form>{React.cloneElement(currentChild)}</Form>}
      </Formik>
    );
    return <form onSubmit={onSubmit}>currentChild</form>;
  }
}
