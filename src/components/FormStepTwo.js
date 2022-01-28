import React, { Fragment } from "react";

export default function FormStepTwo({ goToPrev }) {
	return (
		<Fragment>
			<h1>STEP TWO</h1>
			<button type="button" onClick={() => goToPrev()}>
				Back
			</button>
			<button type="submit">Next</button>
		</Fragment>
	);
}
