import React, { useEffect, useState } from "react";
import FormikDebug from "../../components/form/FormikDebug";
import FormOnboardingFlow from "../../components/form/FormOnboardingFlow";
import FormStepOne from "../../components/form/steps/FormStepOne";
import FormStepTwo from "../../components/form/steps/FormStepTwo";
import SubmitPage from "../../components/form/steps/SubmitPage";

export default function CheckoutPage() {
	const [onboardingData, setOnboardingData] = useState({});
	const [currentIndex, setCurrentIndex] = useState(0);
	const [formValues, setFormValues] = useState(initialValues);

	const initialValues = {
		accountType: "",
		email: "",
		email2: "",
		firstName: "",
		middleName: "",
		lastName: "",
		gender: "",
		mobileNo: "",
		pword: "",
		pword2: ""
	};

	useEffect(() => {
		if (onboardingData) {
			console.log(onboardingData);
		}
	}, [onboardingData]);

	const goToPrev = () => {
		if (currentIndex <= 0) {
			return;
		}
		setCurrentIndex(currentIndex - 1);
	};

	const onSubmit = (values, helpers) => {
		setOnboardingData({
			...onboardingData,
			...values
		});
		if (currentIndex === 2) {
			return;
		}
		setCurrentIndex(currentIndex + 1);
	};

	return (
		<div className="checkout">
			<div className="container">
				<div className="row">
					<div className="col pl-5 pr-5 h-full d-flex justify-end align-items-start">
						<FormOnboardingFlow
							onSubmit={onSubmit}
							currentIndex={currentIndex}
							initialValues={initialValues}
							formValues={formValues}
							setFormValues={setFormValues}>
							<FormStepOne />
							<FormStepTwo goToPrev={goToPrev} />
							<SubmitPage />
						</FormOnboardingFlow>
					</div>
					<div className="col align-items-start h-full d-flex align-items-start">
						<FormikDebug formValues={formValues} />
					</div>
				</div>
			</div>
		</div>
	);
}
