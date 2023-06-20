import React, { useState } from 'react';
import { flows } from './flows';

interface BuyflowProps {
  productId: string;
}

const Buyflow: React.FC<BuyflowProps> = ({ productId }) => {
  const flow = flows[productId];
  const [currentStep, setStep] = useState(0);
  const [collectedData, updateData] = useState({});

  const getStepCallback = (nextStep: number) => (field: string, value: any) => {
    updateData({ ...collectedData, [field]: value });
    if (nextStep < flow.steps.length) {
      setStep(nextStep);
    }
  };

  return (
    <>
      <h4>Buying {flow.name}</h4>
      {flow.steps.map((step, index) => currentStep === index && (
          <step.component
            key={step.key}
            cb={getStepCallback(index + 1)}
            collectedData={collectedData}
            productId={productId} // For final redirection to purchase with the correct Id
          />
        )
      )}
    </>
  );
};

export default Buyflow;
