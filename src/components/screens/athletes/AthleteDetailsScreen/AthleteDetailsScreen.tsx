import React from 'react';
import { useReduxDispatch, useReduxSelector } from '../../../../hooks/redux';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { Text, TextInput, StyleSheet, View, Pressable, NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';
import { remove } from '../../../../state/redux/slices/athleteSlice';
import { Screen } from '../../Screen';
import data from '../../../../data/athletes.json';

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
  input: {
    margin: 4,
    padding: 4,
    width: 144,
    backgroundColor: 'gainsboro',
  }
  ,
  button: {
    margin: 4,
    padding: 8,
    width: 96,
    borderRadius: 4,
    backgroundColor: 'lightblue',
    textAlign: 'center',
    color: 'white',
  }
});

export const AthleteDetailsScreen = (props: { navigation: any, route: any }) => {
  const dispatch = useReduxDispatch();
  const navigation = useNavigation();
  const [canEdit, setCanEdit] = React.useState<boolean>(false);

  const athleteList = useReduxSelector(state => state.athletes.list);;
  const selectedAthlete = athleteList.find(a => a.id === props.route.params.athleteId);

  const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    if (canEdit) return;
  };


  const handlePressCancel = (): void => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Athletes',
      })
    );
  };

  const handlePressDelete = (): void => {
    dispatch(remove(props.route.params.athleteId));
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Athletes',
      })
    );
  };

  const handlePressEdit = () => {
    setCanEdit(!canEdit);
  };

  return (
    <Screen navigation={props.navigation}>
      <Text style={styles.text}>ATHLETE DETAILS</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center'}}>
        <Text>Last Name:</Text>
        <TextInput value={selectedAthlete?.lastName} style={styles.input} onFocus={handleFocus} editable={canEdit} />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 4, margin: 4}}>
        <Text>First Name:</Text>
        <TextInput value={selectedAthlete?.firstName} style={styles.input} editable={canEdit} />
      </View>
      <View style={styles.screenActionsView}>
        <Pressable style={[styles.button, { backgroundColor: 'limegreen' }]} onPress={handlePressEdit}>
          <Text style={{ color: 'white', textAlign: 'center' }}>EDIT</Text>
        </Pressable>
        <Pressable style={[styles.button, { backgroundColor: 'crimson' }]} onPress={handlePressCancel}>
          <Text style={{ color: 'white', textAlign: 'center' }}>CANCEL</Text>
        </Pressable>
        <Pressable style={[styles.button, { backgroundColor: 'crimson' }]} onPress={handlePressDelete}>
          <Text style={{ color: 'white', textAlign: 'center' }}>DELETE</Text>
        </Pressable>
      </View>
    </Screen>
  );
};
