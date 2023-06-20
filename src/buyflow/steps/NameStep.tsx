import React, { useState } from 'react';

interface NameStepProps {
  cb: (field: string, value: string) => void;
}

const NameStep: React.FC<NameStepProps> = ({ cb }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <>
      <div>
        First Name:{' '}
        <input
          type="text"
          onChange={({ target: { value } }) => {
            setFirstName(value);
          }}
          required
          value={firstName}
        />
      </div>
      <div>
        Last Name:{' '}
        <input
          type="text"
          onChange={({ target: { value } }) => {
            setLastName(value);
          }}
          required
          value={lastName}
        />
      </div>
      <button onClick={() => cb('name', `${firstName} ${lastName}`)}>
        Next
      </button>
    </>
  );
};

export default NameStep;
