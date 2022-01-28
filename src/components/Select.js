import { ErrorMessage, Field, useField } from "formik";
import React from "react";
import TextError from "./TextError";

function Select({ label, name, options, onChange, ...rest }) {
	const [props, meta, helpers] = useField(name);

	return (
		<div className="form-control">
			<label htmlFor={name}>{label}</label>
			<Field
				label={name}
				name={name}
				{...rest}
				as="select"
				onChange={(e) => {
					helpers.setValue(e.target.value);
          onChange(e)
				}}>
        <option disabled value="">(Make a selection)</option>
				{options.map((option) => (
					<option key={option.key} value={option.value}>
						{option.value}
					</option>
				))}
			</Field>
			<ErrorMessage name={name} component={TextError} />
		</div>
	);
}

export default Select;

/*
<Field name={name}  {...rest} as="select">
        {options.map((option) => {
          return (
						<option key={option.key} value={option.value}>
							{option.key}
						</option>
					);
        })}
      </Field>
*/ 