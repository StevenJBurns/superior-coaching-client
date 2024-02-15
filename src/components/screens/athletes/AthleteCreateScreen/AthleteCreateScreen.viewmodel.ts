import React from "react";
import { useAthlete } from "../../../../hooks";

type NewAthleteFields = {
  lastName: string,
  firstName: string,
  phone: string,
  email: string,
  chronologicalAge: number,
  trainingAge: number,
};

const newAthleteArgs: NewAthleteFields = {
  lastName: '',
  firstName: '',
  phone: '',
  email: '',
  chronologicalAge: 0,
  trainingAge: 0,
};

type Payload = {
  key: string,
  value: string | number, 
};

type actions = {
  type: athleteAction,
  payload: Payload,
};

enum athleteAction {
  setLastName,
  setFirstName,
  setPhone,
  setEmail,
  setChronologicalAge,
  setTrainingAge,
};

const init = (): NewAthleteFields => (newAthleteArgs);

const athleteFieldReducer = (athleteFields: NewAthleteFields, action: actions ): NewAthleteFields => {
  const { type, payload } = action
  switch (type) {
    case athleteAction.setLastName:
      return { ...athleteFields, lastName: payload.value.toString() };
    case athleteAction.setFirstName:
      return { ...athleteFields, firstName: payload.value.toString() };
    case athleteAction.setPhone:
      return { ...athleteFields, phone: payload.value.toString() };
    case athleteAction.setEmail:
      return { ...athleteFields, email: payload.value.toString() };
    case athleteAction.setChronologicalAge:
      return { ...athleteFields, chronologicalAge: +payload.value };
    case athleteAction.setTrainingAge:
      return { ...athleteFields, trainingAge: +payload.value };
    default:
      throw new Error('Unknown athlete action type');
  };
};

const useViewModel = () => {
  const { save } = useAthlete();
  const [athleteFields, dispatch] = React.useReducer(athleteFieldReducer, newAthleteArgs, init);
  const [isFormValid, setIsFormValid] = React.useState<boolean>(false);

  const setLastNameField = (newLastName: string): void => {
    dispatch({
      type: athleteAction.setLastName,
      payload: {key: 'lastName', value: newLastName }
    });
  };

  const setFirstNameField = (newFirstName: string): void => {
    dispatch({
      type: athleteAction.setFirstName,
      payload: {key: 'firstName', value: newFirstName }
    });
  };

  React.useEffect(() => {
    const { lastName, firstName} = athleteFields;
    setIsFormValid(lastName.length > 0 && firstName.length > 0);
  }, [athleteFields]);

  return {
    athleteFields,
    handlers: {
      setLastNameField,
      setFirstNameField,
      save
    },
    isFormValid,
  };
};

export default useViewModel;
