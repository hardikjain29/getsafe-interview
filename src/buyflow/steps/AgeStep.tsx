import React from 'react'
import useInput from '../../hooks/useInput'

interface AgeStepProps {
  handleStepChange: (field: string, value: string) => void
}

const AgeStep: React.FC<AgeStepProps> = ({ handleStepChange }) => {
  const { getInput, inputData, validateInput } = useInput();
  const handleNext = () => {
    if(validateInput()) {
      handleStepChange('age', inputData);
    }
  }
  
  return (
    <>
      <div>
        Age: {getInput('number')}
      </div>
      <button onClick={handleNext}>Next</button>
    </>
  )
}

export default AgeStep
