import React, { useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

export default function FormOnboardingFlow({
	children,
	currentIndex,
	initialValues,
	formValues,
	setFormValues,
	onSubmit
}) {
	const currentChild = React.Children.toArray(children)[currentIndex];

	const validationSchema = Yup.object({
		accountType: Yup.string().required("Choose one!"),
		email: Yup.string().required("Required!"),
		email2: Yup.string().required("Required!"),
		firstName: Yup.string().required(""),
		middleName: Yup.string().required("Required!"),
		lastName: Yup.string().required("Required!"),
		gender: Yup.string().required("Choose one!"),
		mobileNo: Yup.string().required("Choose one!"),
		pword: Yup.string().required("Required!"),
		pword2: Yup.string().required("Required!")
		// description: Yup.string()
		// 	.required("Required!")
		// 	.min(10, "Must be at least 5 to 100 characters")
		// 	.max(50, "Must be at least 5 to 100 characters"),
		// checkboxOption: Yup.array().min(1, "Choose one!")
	});

	if (React.isValidElement(currentChild)) {
		return (
			<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
				{(formik) => {
					const { handleChange, isValid, touched, resetForm } = formik;

					const onChange = (e) => {
						const targetEl = e.target;
						const fieldName = targetEl.name;
						setFormValues({
							...formValues,
							[fieldName]: targetEl.value
						});
						return handleChange(e);
					};
					return (
						<Form>
							{React.cloneElement(currentChild, {
								onChange,
								isValid,
								touched,
								resetForm
							})}
						</Form>
					);
				}}
			</Formik>
		);
	}
	return currentChild;
}
