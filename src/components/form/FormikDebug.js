import React from "react";

export default function FormikDebug({ formValues }) {
	return (
		<div className="container">
			<div className="row">
				<div className="col align-items-start">
					<pre>{JSON.stringify(formValues, null, 2)}</pre>
				</div>
			</div>
		</div>
	);
}
