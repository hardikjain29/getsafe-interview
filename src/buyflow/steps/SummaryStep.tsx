import React from 'react';
import { Link } from 'react-router-dom';

interface SummaryStepProps {
  collectedData: {
    email: string;
    age: number;
    name?: string;
  };
  productId: string;
}

const SummaryStep: React.FC<SummaryStepProps> = ({ collectedData, productId }) => (
  <>
    <div>Email: {collectedData.email}</div>
    <div>Age: {collectedData.age}</div>
    {collectedData.name && <div>Name: {collectedData.name}</div>}
    <div>
      <Link to={`/purchased=${productId}`}>Purchase</Link>
    </div>
  </>
);

export default SummaryStep;
