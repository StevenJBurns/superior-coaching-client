import { Pressable, Text, StyleSheet, View } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';

type Props = {
  destinationScreen?: string,
};

const styles = StyleSheet.create({
  createButtonContainer: {
    padding: 8,
    marginVertical: 12,
    backgroundColor: 'green',
  },
  createButton: {
    padding: 8,
    marginVertical: 12,
    backgroundColor: 'whitesmoke',
  },
  buttonText: {
    color: 'green',
  }
});

export const AthleteCreateButton = (props: Props) => {
  const navigation = useNavigation();
  const { destinationScreen } = props;
  const handlePress = (): void => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'AthleteCreateScreen',
      })
    );
  };

  return (
    <Pressable onPress={handlePress} style={styles.createButton}>
      <Text style={styles.buttonText}>Create New Athlete Card</Text>
    </Pressable>
  );
};
