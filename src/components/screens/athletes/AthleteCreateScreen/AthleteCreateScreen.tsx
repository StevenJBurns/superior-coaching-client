import React from 'react';
import { useAppDispatch } from '../../../../hooks/redux';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { Pressable, Text, TextInput, StyleSheet, View } from 'react-native';
import { create } from '../../../../state/redux/slices/athleteSlice';
import { Athlete } from '../../../../models/Athlete';
import { Screen } from '../../Screen';

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  screenActionsView : {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    margin: 4,
    padding: 8,
    width: 96,
    borderRadius: 4,
    backgroundColor: 'lightblue',
    textAlign: 'center',
    color: 'white',
  },
  input: {
    width: 160,
    margin: 2,
    padding: 8,
    borderColor: "gray",
    borderRadius: 4,
    borderWidth: 1,
  }
});

enum athleteAction {
  setLastName,
  setFirstName,
  setPhone,
  setEmail,
};

type actions = {
  type: athleteAction,
  value: string,
};

const r = (athlete: Athlete, action: actions ): Athlete => {
  switch (action.type) {
    case athleteAction.setLastName:
      athlete.lastName = action.value;
      break;
    case athleteAction.setFirstName:
      athlete.firstName = action.value;
      break;
    case athleteAction.setPhone:
      athlete.phone = action.value;
      break;
    case athleteAction.setEmail:
      athlete.email = action.value;
      break;
    default:
      break;
  };
  return athlete;
};

export const AthleteCreateScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const athleteInitialState = new Athlete({
    lastName: '',
    firstName: '',
    phone: '123-456-7890',
    email: 'john@athlete.com',
    chronologicalAge: 16,
    trainingAge: 3,
  });
  
  const [athlete, localDispatch] = React.useReducer(r, athleteInitialState);
  const [isSaveDisabled, setIsSaveDisabled] = React.useState<boolean>(true);
  const { isValid: isAthleteValid } = athlete;

  console.log(athlete);
  
  const handlePressSave = (): void => {
    dispatch(create(JSON.stringify(athlete)));
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

  const handleLastNameTextChange = (text: string) => {
    localDispatch({ type: athleteAction.setLastName, value: text });
  };

  React.useEffect(() => {
    setIsSaveDisabled(!!athlete.firstName.length || !!athlete.lastName.length);
  }, [athlete]);

  console.log('isAthleteValid: ', isAthleteValid);
  console.log('isSaveDisabled: ', isSaveDisabled);
  
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
        onChangeText={text => localDispatch({ type: athleteAction.setFirstName, value: text })}
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
      <View style={styles.screenActionsView}>
        <Pressable
          style={[styles.button, { backgroundColor: 'darkgreen' }]}
          onPress={handlePressSave}
          disabled={isSaveDisabled}
        >
          <Text style={{ color: 'white' }}>SAVE</Text>
        </Pressable>
        <Pressable
          style={[styles.button, { backgroundColor: 'crimson' }]}
          onPress={handlePressCancel}
        >
          <Text style={{ color: 'white' }}>CANCEL</Text>
        </Pressable>
      </View>
    </Screen>
  );
};
