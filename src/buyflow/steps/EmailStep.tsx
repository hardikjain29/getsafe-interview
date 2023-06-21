import React from 'react'
import useInput from '../../hooks/useInput'

interface EmailStepProps {
  handleStepChange: (field: string, value: string) => void
}

const EmailStep: React.FC<EmailStepProps> = ({ handleStepChange }) => {
  const { getInput, inputData } = useInput();
  const handleNext = () => {
    handleStepChange('email', inputData);
  }

  return (
    <>
      <div>
        Email: {getInput('email')}
      </div>
      <button onClick={handleNext}>Next</button>
    </>
  )
}

export default EmailStep
