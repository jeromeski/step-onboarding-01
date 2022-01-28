import React from 'react';

const FormikDebug = ({formValues}) => {
  return (
		<div className="container">
			<div className="row">
				<div className="col">
					<pre>{JSON.stringify(formValues,null,4)}</pre>
				</div>
			</div>
		</div>
	);
};

export default FormikDebug;
