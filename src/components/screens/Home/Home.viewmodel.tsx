import { useTrainingPlan } from '../../../hooks/useTrainingPlan';

export const useViewModel = () => {
  const { trainingPlans, setTrainingPlans } = useTrainingPlan();
  
  return {
    trainingPlans,
    setTrainingPlans,
  };
};
