import React from 'react';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { Pressable, Text, TextInput, StyleSheet, View } from 'react-native';
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

const initialState = new Athlete({
  lastName: 'Smith',
  firstName: 'John',
  phone: '123-456-7890',
  email: 'john@athlete.com',
  chronologicalAge: 16,
  trainingAge: 3,
});

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
  console.table(athlete);
  return athlete;
};

export const AthleteCreateScreen = () => {
  const navigation = useNavigation();
  const [_, dispatch] = React.useReducer(r, initialState);

  const handleClickOk = (): void => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Athletes',
      })
    );
  };

  const handleClickCancel = (): void => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Athletes',
      })
    );
  };

  const handleLastNameTextChange = (text: string) => {
    if (text) dispatch({ type: athleteAction.setLastName, value: text });
  }

  return (
    <Screen navigation={navigation}>
      <Text style={styles.text}>CREATE NEW ATHLETE</Text>
      <TextInput
        style={styles.input}
        placeholder='Last Name'
        onChangeText={handleLastNameTextChange}
        clearTextOnFocus
      />
      <TextInput
        style={styles.input}
        placeholder='First Name'
        onChangeText={text => dispatch({ type: athleteAction.setFirstName, value: text })}
        clearTextOnFocus
      />
      <TextInput
        style={styles.input}
        placeholder='Phone'
        onChangeText={text => dispatch({ type: athleteAction.setPhone, value: text })}
        keyboardType='number-pad'
        clearTextOnFocus
      />
      <TextInput
        style={styles.input}
        placeholder='Email'
        textContentType='emailAddress'
        onChangeText={text => dispatch({ type: athleteAction.setEmail, value: text })}
        keyboardType='email-address'
        clearTextOnFocus
      />
      <View style={styles.screenActionsView}>
        <Pressable style={[styles.button, { backgroundColor: 'darkgreen' }]} onPress={handleClickOk}>
          <Text style={{ color: 'white' }}>OK</Text>
        </Pressable>
        <Pressable style={[styles.button, { backgroundColor: 'crimson' }]} onPress={handleClickCancel}>
          <Text style={{ color: 'white' }}>CANCEL</Text>
        </Pressable>
      </View>
    </Screen>
  );
};
