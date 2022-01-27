import React, { Fragment } from "react";

export default function SubmitPage({ goToPrev }) {
  const data = {
    zipCode: 1171
  };
  return (
    <Fragment>
      <h1>ARE YOU SURE YOU WANT TO SUBMIT?</h1>
      <button type="button" onClick={() => goToPrev()}>
        Back
      </button>
      <button type="submit">Next</button>
    </Fragment>
  );
}
