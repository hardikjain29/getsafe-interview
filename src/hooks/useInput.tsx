import { useState } from 'react';

const useInput = () => {
  const [inputData, setInputData] = useState('');

  const handleChange = (value: any) => {
    setInputData(value);
  };

  const getInput = (inputType = 'text') => {
    return (
      <>
        <input
          type={inputType}
          onChange={({ target: { value }}) => handleChange(value)} // Another way is to use refs, instead of updating the state on every letter.
          value={inputData}
        />
      </>
    );
  };

  return { inputData, getInput };
};

export default useInput;
