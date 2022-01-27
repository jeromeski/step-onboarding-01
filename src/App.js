import { useState } from "react";
import FormOnboardingFlow from "./components/FormOnboardingFlow";
import FormStepOne from "./components/FormStepOne";
import FormStepTwo from "./components/FormStepTwo";

import "./styles.css";

export default function App() {
  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = (stepData) => {
    setOnboardingData({
      ...stepData,
      ...onboardingData
    });

    setCurrentIndex(currentIndex + 1);
  };
  return (
    <div className="App">
      <FormOnboardingFlow goToNext={goToNext} currentIndex={currentIndex}>
        <FormStepOne />
        <FormStepTwo />
      </FormOnboardingFlow>
    </div>
  );
}
