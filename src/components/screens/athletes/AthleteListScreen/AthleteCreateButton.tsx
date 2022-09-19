import { Pressable, Text, StyleSheet, View } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';

type Props = {
  destinationScreen?: string,
};

const styles = StyleSheet.create({
  createButtonContainer: {
    padding: 8,
    marginVertical: 12,
  },
  createButton: {
    width: 192,
    padding: 8,
    marginVertical: 12,
    backgroundColor: 'mediumseagreen'.toLowerCase(),
    borderRadius: 4,
  },
  buttonText: {
    color: 'green',
  }
});

export const AthleteCreateButton = (props: Props) => {
  const navigation = useNavigation();

  const handlePress = (): void => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'AthleteCreate',
      })
    );
  };

  return (
    <Pressable onPress={handlePress} style={styles.createButton}>
      <Text style={styles.buttonText}>Create New Athlete Card</Text>
    </Pressable>
  );
};
