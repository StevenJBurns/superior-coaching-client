import React from 'react';
import { useReduxDispatch } from '../../../../hooks/redux';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { Pressable, Text, TextInput, View } from 'react-native';
import { create } from '../../../../state/redux/slices/athleteSlice';
import { Athlete } from '../../../../models/Athlete';
import { Screen } from '../../Screen';
import styles from './AthleteCreateScreen.styles';

enum athleteAction {
  setLastName,
  setFirstName,
  setPhone,
  setEmail,
  setChronologicalAge,
  setTrainingAge,
};

type actions = {
  type: athleteAction,
  value: string,
};

const init = (args: any) => {
  return new Athlete(args);
};

const r = (athlete: Athlete, action: actions ): Athlete => {
  const newAthlete = Object.assign(
    new Athlete({
      lastName: athlete.lastName,
      firstName: athlete.firstName,
      phone: athlete.phone,
      email: athlete.email,
      chronologicalAge: athlete.chronologicalAge,
      trainingAge: athlete.trainingAge,
    }),
    athlete);
  
  switch (action.type) {
    case athleteAction.setLastName:
      newAthlete.lastName = action.value;
      break;
    case athleteAction.setFirstName:
      newAthlete.firstName = action.value;
      break;
    case athleteAction.setPhone:
      newAthlete.phone = action.value;
      break;
    case athleteAction.setEmail:
      newAthlete.email = action.value;
      break;
    case athleteAction.setChronologicalAge:
      newAthlete.chronologicalAge = parseInt(action.value);
      break;
    case athleteAction.setTrainingAge:
      newAthlete.trainingAge = parseInt(action.value);
      break;
    default:
      break;
  };
  return newAthlete;
};

export const AthleteCreateScreen = () => {
  const dispatch = useReduxDispatch();
  const navigation = useNavigation();

  const newAthleteArgs = {
    lastName: '',
    firstName: '',
    phone: '',
    email: '',
    chronologicalAge: 0,
    trainingAge: 0,
  };

  const [athlete, localDispatch] = React.useReducer(r, newAthleteArgs, init);
  const [isSaveDisabled, setIsDisabled] = React.useState(!athlete.isValid);
  
  const handleLastNameTextChange = (text: string) => {
    localDispatch({ type: athleteAction.setLastName, value: text });
  };

  const handleFirstNameTextChange = (text: string) => {
    localDispatch({ type: athleteAction.setFirstName, value: text });
  };

  const handlePressSave = (): void => {
    dispatch(create(JSON.stringify({
      id: athlete.id,
      lastName: athlete.lastName,
      firstName: athlete.firstName,
    })));
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Athletes',
      })
    );
  };

  const handlePressCancel = (): void => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Athletes',
      })
    );
  };
  
  React.useEffect(() => {
    const { isValid } = athlete;
    setIsDisabled(!isValid);
  }, [athlete]);

  return (
    <Screen navigation={navigation}>
      <Text style={styles.text}>CREATE NEW ATHLETE</Text>
      <TextInput
        style={styles.input}
        placeholder='Last Name'
        defaultValue={athlete.lastName}
        onChangeText={handleLastNameTextChange}
      />
      <TextInput
        style={styles.input}
        placeholder='First Name'
        defaultValue={athlete.firstName}
        onChangeText={handleFirstNameTextChange}
      />
      <TextInput
        style={styles.input}
        placeholder='Phone'
        defaultValue={athlete.phone}
        onChangeText={text => localDispatch({ type: athleteAction.setPhone, value: text })}
        keyboardType='number-pad'
      />
      <TextInput
        style={styles.input}
        placeholder='Email'
        defaultValue={athlete.email}
        textContentType='emailAddress'
        onChangeText={text => localDispatch({ type: athleteAction.setEmail, value: text })}
        keyboardType='email-address'
      />
      <TextInput
        style={styles.input}
        placeholder='Chronological Age'
        defaultValue={athlete.chronologicalAge.toString()}
        onChangeText={text => localDispatch({ type: athleteAction.setChronologicalAge, value: text })}
        keyboardType='email-address'
      />
      <TextInput
        style={styles.input}
        placeholder='Training Age'
        defaultValue={athlete.trainingAge.toString()}
        onChangeText={text => localDispatch({ type: athleteAction.setTrainingAge, value: text })}
        keyboardType='email-address'
      />
      <View style={styles.screenActionsView}>
        <Pressable
          style={[styles.button, { backgroundColor: isSaveDisabled ? 'darkolivegreen' : 'limegreen' }]}
          disabled={!athlete.isValid}
          onPress={handlePressSave}
        >
          <Text style={{ color: 'white', textAlign: 'center' }}>SAVE</Text>
        </Pressable>
        <Pressable
          style={[styles.button, { backgroundColor: 'crimson' }]}
          onPress={handlePressCancel}
        >
          <Text style={{ color: 'white', textAlign: 'center' }}>CANCEL</Text>
        </Pressable>
      </View>
    </Screen>
  );
};
