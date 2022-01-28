import { useState } from "react";
import FormOnboardingFlow from "./components/FormOnboardingFlow";
import FormStepOne from "./components/FormStepOne";
import FormStepTwo from "./components/FormStepTwo";
import SubmitPage from "./components/SubmitPage";

import "./styles.css";

export default function App() {
  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  console.log(onboardingData);

  const goToNext = (stepData) => {
    setOnboardingData({
      ...stepData,
      ...onboardingData
    });
    if (currentIndex === 2) {
      onSubmit(onboardingData);
      return;
    }
    setCurrentIndex(currentIndex + 1);
  };

  const goToPrev = () => {
    if (currentIndex <= 0) {
      return;
    }
    setCurrentIndex(currentIndex - 1);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(onboardingData);
  };

  return (
    <div className="App">
      <FormOnboardingFlow currentIndex={currentIndex} onSubmit={onSubmit}>
        <FormStepOne goToNext={goToNext} />
        <FormStepTwo goToPrev={goToPrev} goToNext={goToNext} />
        <SubmitPage goToPrev={goToPrev} />
      </FormOnboardingFlow>
    </div>
  );
}
