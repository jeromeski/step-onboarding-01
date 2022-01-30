import React, { useEffect, useState } from "react";
import FormikDebug from "../../components/form/FormikDebug";
import FormOnboardingFlow from "../../components/form/FormOnboardingFlow";
import FormStepOne from "../../components/form/steps/FormStepOne";
import FormStepTwo from "../../components/form/steps/FormStepTwo";

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

export default function CheckoutPage() {
	const [onboardingData, setOnboardingData] = useState({});
	const [currentIndex, setCurrentIndex] = useState(0);
	const [formValues, setFormValues] = useState(initialValues);
	const [showModal, setShowModal] = useState(false);


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
		if (currentIndex === 1) {
			setShowModal(false);
			helpers.resetForm();
			setCurrentIndex(0);
			console.log(onboardingData);
			setOnboardingData({});
			setFormValues(initialValues);
			return;
		}
		setCurrentIndex(currentIndex + 1);
	};

	const handleConfirm = () => {
		setShowModal(true);
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
							<FormStepOne setFormValues={setFormValues} initialValues={initialValues} />
							<FormStepTwo
								goToPrev={goToPrev}
								handleConfirm={handleConfirm}
								showModal={showModal}
								setShowModal={setShowModal}
							/>
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
