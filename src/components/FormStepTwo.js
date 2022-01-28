import React, { Fragment } from "react";

export default function FormStepTwo({ goToPrev, goToNext }) {
  const data = {
    zipCode: 1171
  };
  return (
    <Fragment>
      <h1>STEP TWO</h1>
      <button type="button" onClick={() => goToPrev()}>
        Back
      </button>
      <button type="button" onClick={() => goToNext(data)}>
        Next
      </button>
    </Fragment>
  );
}
