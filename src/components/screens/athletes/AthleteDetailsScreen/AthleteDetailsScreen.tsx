import { useNavigation, CommonActions } from '@react-navigation/native';
import { Button, Text, TextInput, StyleSheet, View } from 'react-native';
import { Screen } from '../../Screen';
import data from '../../../../data/athletes.json';

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});

export const AthleteDetailsScreen = (props: { navigation: any, route: any }) => {
  const navigation = useNavigation();

  const athlete = data.find(a => a.id === props.route.params);

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
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <Button title="OK" onPress={handleClickOk} />
        <Button title="Cancel" onPress={handleClickCancel} />
      </View>
    </Screen>
  );
};
