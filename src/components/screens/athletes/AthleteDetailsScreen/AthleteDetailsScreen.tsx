import { useNavigation, CommonActions } from '@react-navigation/native';
import { Button, Text, TextInput, StyleSheet, View, Pressable } from 'react-native';
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
  const navigation = useNavigation();

  const athlete = data.find(a => a.id === props.route.params.athleteId);

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

  return (
    <Screen navigation={props.navigation}>
      <Text style={styles.text}>ATHLETE DETAILS</Text>
      <TextInput value={athlete?.lastName} />
      <TextInput value={athlete?.firstName} />
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
