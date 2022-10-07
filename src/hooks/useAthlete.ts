import React from 'react';
import { useReduxDispatch } from './redux';
import { Athlete } from '../models/Athlete';
import { create } from '../state/redux/slices/athleteSlice';

export const useAthlete = () => {
  const reduxDispatch = useReduxDispatch();
  const [isAthleteValid, setIsAthleteValid] = React.useState(false);

  const saveNewAthlete = (athlete: any): void => {
    reduxDispatch(create(JSON.stringify({
      id: athlete.id,
      lastName: athlete.lastName,
      firstName: athlete.firstName,
    })));
  };

  return {
    save: saveNewAthlete,
  };
};
