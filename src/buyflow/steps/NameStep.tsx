import React, { useState } from 'react'
import useInput from '../../hooks/useInput'

interface NameStepProps {
  handleStepChange: (field: string, value: string) => void
}

const NameStep: React.FC<NameStepProps> = ({ handleStepChange }) => {
  const { getInput: firstNameInput, inputData: firstName } = useInput();
  const { getInput: lastNameInput, inputData: lastName } = useInput();
  const [error, setError] = useState(false);

  const handleNext = () => {
    if (!firstName || !lastName) {
      setError(true);
    } else {
      setError(false);
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
      {
        error ? <div>
          Please enter all details before proceeding.
        </div> : null
      }
      <button onClick={handleNext}>Next</button>
    </>
  )
}

export default NameStep;
