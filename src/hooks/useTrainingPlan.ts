import React from 'react';
import mockPlans from '../data/mockTrainingPlans.json';

export const useTrainingPlan = () => {
  const [trainingPlans, setTrainingPlans] = React.useState(mockPlans);

  return {
    trainingPlans,
    setTrainingPlans,
  };
};
