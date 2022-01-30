import React, { Fragment } from "react";
import PasswordInput from "../elements/PasswordInput";
import RadioButtons from "../elements/RadioButtons";
import Select from "../elements/Select";
import TextInput from "../elements/TextInput";

export default function FormStepOne({
	onChange,
	isValid,
	touched,
	resetForm,
	initialValues,
	setFormValues
}) {
	const accountOptions = [
		{ key: "Individual", value: "Individual" },
		{ key: "Business", value: "Business" }
	];

	const genderOptions = [
		{ key: 1, value: "Male" },
		{ key: 2, value: "Female" }
	];

	const handleFormReset = () => {
		resetForm();
		setFormValues(initialValues);
	};

	return (
		<Fragment>
			<RadioButtons
				name="accountType"
				label="Account Ownership:"
				options={accountOptions}
				onChange={onChange}
			/>
			<TextInput name="email" type="email" label="* Email ID" placeholder="" onChange={onChange} />
			<TextInput
				name="email2"
				type="email"
				label="* Confirm Email ID"
				placeholder=""
				onChange={onChange}
			/>
			<TextInput
				name="firstName"
				type="text"
				label="* Owner/Representative"
				placeholder="First Name"
				onChange={onChange}
			/>
			<TextInput
				name="middleName"
				type="text"
				label=""
				placeholder="Middle Name"
				onChange={onChange}
			/>
			<TextInput name="lastName" type="text" label="" placeholder="Last Name" onChange={onChange} />
			<Select name="gender" label="* Gender" options={genderOptions} onChange={onChange} />
			<TextInput
				name="mobileNo"
				type="text"
				label="* Contact Number"
				placeholder="Last Name"
				onChange={onChange}
			/>
			<PasswordInput name="pword" type="password" label="* Password" onChange={onChange} />
			<PasswordInput name="pword2" type="password" label="* Confirm Password" onChange={onChange} />
			<button type="button" onClick={handleFormReset}>
				Reset All
			</button>
			<button
				disabled={!isValid || (Object.keys(touched).length === 0 && touched.constructor === Object)}
				type="submit">
				Next
			</button>
		</Fragment>
	);
}
