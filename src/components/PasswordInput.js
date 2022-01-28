import React, { useState } from "react";
import TextError from './TextError';

const { Field, ErrorMessage } = require("formik");

export default function PasswordInput(props) {
  const [show, setShow] = useState(false);
  const { label, name, type, ...rest } = props;
  const handleShow = () => {
    setShow(!show);
  };

  return (
		<div className="form-control">
			<label htmlFor={name}>{label}</label>
			<Field id={name} name={name} type={`${show ? "text" : "password"}`} {...rest} />

			<ErrorMessage name={name} component={TextError} />
			<button type="button" 
        onClick={handleShow}
      >
				show
			</button>
		</div>
	);
};
