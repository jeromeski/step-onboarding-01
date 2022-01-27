import React, { useEffect, useRef, useState } from "react";

export default function FormOnboardingFlow({
  children,
  goToNext,
  currentIndex
}) {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const email2Ref = useRef(null);
  const genderRef = useRef(null);
  const phoneRef = useRef(null);
  const passwordRef = useRef(null);
  const password2Ref = useRef(null);

  useEffect(() => {
    const email = emailRef.current;
    if (email) {
      emailRef.current.focus();
    }
  }, []);

  const currentChild = React.Children.toArray(children)[currentIndex];

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, {
      goToNext
    });
  }
  return currentChild;
}
