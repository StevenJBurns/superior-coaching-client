import { Pressable, Text } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import styles from './AthleteCreateButton.styles';

type Props = {
  destinationScreen?: string,
};

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
