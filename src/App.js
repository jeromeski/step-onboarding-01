import { useState } from "react";
import FormikDebug from './components/FormikDebug';
import FormOnboardingFlow from "./components/FormOnboardingFlow";
import FormStepOne from "./components/FormStepOne";
import FormStepTwo from "./components/FormStepTwo";
import SubmitPage from "./components/SubmitPage";

import "./styles.css";

export default function App() {
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

  console.log(onboardingData);

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

	console.log(onboardingData);

	return (
		<div className="App">
			<div className="container">
				<div className="row">
					<div className="col pl-5 pr-5">
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
					<div className="col">
						<FormikDebug formValues={formValues} />
					</div>
				</div>
			</div>
		</div>
	);
}
