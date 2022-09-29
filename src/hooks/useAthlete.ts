import React from 'react';
import { useReduxDispatch, useReduxSelector } from './redux';

import athleteSlice from "../state/redux/slices/athleteSlice";

export const useAthlete = () => {
  const [athlete, setAthlete] = React.useState();
    
  return {
    athleteSlice,
  };
};
