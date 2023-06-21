import { useState } from 'react';

const useInput = () => {
  const [inputData, setInputData] = useState('');
  const [error, setError] = useState(false);

  const handleChange = (value: any) => {
    setInputData(value);
  };

  const validateInput = (): boolean => {
    if(!inputData) {
      setError(true);
      return false;
    }
    setError(false);
    return true;
  }

  const getInput = (inputType = 'text') => {
    return (
      <>
        <input
          type={inputType}
          onChange={({ target: { value }}) => handleChange(value)} // Another way is to use refs, instead of updating the state on every letter.
          value={inputData}
        />
        {error ? <div style={{ color: 'red' }}>'Please enter this detail'</div> : null}
      </>
    );
  };

  return { inputData, getInput, validateInput };
};

export default useInput;
