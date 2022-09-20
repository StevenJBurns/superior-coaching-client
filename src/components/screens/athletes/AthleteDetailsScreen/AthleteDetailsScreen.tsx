import React from 'react';
import { useAppDispatch } from '../../../../hooks/redux';
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
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const [canEdit, setCanEdit] = React.useState<boolean>(false);

  const athlete = data.find(a => a.id === props.route.params.athleteId);

  const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    if (canEdit) return;
  };

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

  const handleClickDelete = (): void => {
    dispatch(remove(props.route.params.athleteId));
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Athletes',
      })
    );
  };

  const handleEditStateToggle = () => {
    setCanEdit(!canEdit);
  };

  return (
    <Screen navigation={props.navigation}>
      <Text style={styles.text}>ATHLETE DETAILS</Text>
      <TextInput value={athlete?.lastName} style={styles.input} onFocus={handleFocus} editable={canEdit} />
      <TextInput value={athlete?.firstName} style={styles.input} editable={canEdit} />
      <View style={styles.screenActionsView}>
        <Pressable style={[styles.button, { backgroundColor: 'darkgreen' }]} onPress={handleClickOk}>
          <Text style={{ color: 'white' }}>OK</Text>
        </Pressable>
        <Pressable style={[styles.button, { backgroundColor: 'crimson' }]} onPress={handleClickCancel}>
          <Text style={{ color: 'white' }}>CANCEL</Text>
        </Pressable>
        <Pressable style={[styles.button, { backgroundColor: 'crimson' }]} onPress={handleClickDelete}>
          <Text style={{ color: 'white' }}>DELETE</Text>
        </Pressable>
      </View>
      <Pressable onPress={handleEditStateToggle}>
        <Text>TOGGLE FORM MODE</Text>
      </Pressable>
      <Text>{`can edit: ${canEdit}`}</Text>
    </Screen>
  );
};
