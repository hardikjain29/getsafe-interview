import React from 'react';
import EmailStep from './steps/EmailStep';
import AgeStep from './steps/AgeStep';
import SummaryStep from './steps/SummaryStep';
import { ProductIds } from './types';

interface Step {
  key: string;
  component: React.ComponentType<any>;
}

export type Flow = {
  name: string;
  id: ProductIds;
  steps: Step[]
}

interface Flows {
  [key: string]: Flow;
}

console.log(ProductIds.devIns);

export const flows: Flows = {
  [ProductIds.devIns]: {
    name: 'Developer Insurance',
    id: ProductIds.devIns,
    steps: [
      { key: 'email', component: EmailStep },
      { key: 'age', component: AgeStep },
      { key: 'summary', component: SummaryStep },
    ],
  }
};