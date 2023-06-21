import React from 'react'
import useInput from '../../hooks/useInput'

interface NameStepProps {
  handleStepChange: (field: string, value: string) => void
}

const NameStep: React.FC<NameStepProps> = ({ handleStepChange }) => {
  const { getInput: firstNameInput, inputData: firstName, validateInput: firstNameValidation } = useInput();
  const { getInput: lastNameInput, inputData: lastName, validateInput: lastNameValidation } = useInput();

  const handleNext = () => {
    if (firstNameValidation() && lastNameValidation()) {
      handleStepChange('name', `${firstName} ${lastName}`);
    }
  }

  return (
    <>
      <div>
        First Name: {firstNameInput()}
      </div>
      <div>
        Last Name: {lastNameInput()}
      </div>
      <button onClick={handleNext}>Next</button>
    </>
  )
}

export default NameStep;
