import React from 'react';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { Pressable, Text, View } from 'react-native';
import { Screen } from '../../Screen';
import {
  LastNameTextInput,
  FirstNameTextInput,
  PhoneContactTextInput,
  EmailContactTextInput,
  ChronologicalAgeTextInput,
  TrainingAgeTextInput,
} from '../../../inputs';
import useViewModel from './AthleteCreateScreen.viewmodel';
import styles from './AthleteCreateScreen.styles';

export const AthleteCreateScreen = () => {
  const navigation = useNavigation();
  const {
    athleteFields,
    handlers,
    isFormValid,
  } = useViewModel();

  const handleLastNameTextChange = (text: string) => {
    handlers.setLastNameField(text);
  };

  const handleFirstNameTextChange = (text: string) => {
    handlers.setFirstNameField(text);
  };

  const handlePressSave = (): void => {
    // dispatch(create(JSON.stringify({
    //   id: athlete.id,
    //   lastName: athlete.lastName,
    //   firstName: athlete.firstName,
    // })));
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

  const { chronologicalAge, trainingAge } = athleteFields;
  return (
    <Screen navigation={navigation}>
      <Text style={styles.text}>CREATE NEW ATHLETE</Text>
      <LastNameTextInput defaultValue={athleteFields.lastName} onChangeText={handleLastNameTextChange} />
      <FirstNameTextInput defaultValue={athleteFields.firstName} onChangeText={handleFirstNameTextChange} />
      <PhoneContactTextInput defaultValue={athleteFields.phone} />
      <EmailContactTextInput defaultValue={athleteFields.email} />
      <ChronologicalAgeTextInput defaultValue={chronologicalAge > 0 ? chronologicalAge.toString() : undefined} />
      <TrainingAgeTextInput defaultValue={trainingAge > 0 ? trainingAge.toString() : undefined} />
      <View style={styles.screenActionsView}>
        <Pressable
          style={[styles.button, { backgroundColor: isFormValid ? 'limegreen' : 'darkolivegreen' }]}
          disabled={!isFormValid}
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
