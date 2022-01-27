import React from "react";

export default function FormOnboardingFlow({
  children,
  currentIndex,
  onSubmit
}) {
  const currentChild = React.Children.toArray(children)[currentIndex];

  if (React.isValidElement(currentChild)) {
    return <form onSubmit={onSubmit}>{React.cloneElement(currentChild)}</form>;
  }
  return <form onSubmit={onSubmit}>currentChild</form>;
}
