import { Pressable, Text, StyleSheet } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';

type Athlete = {
  id: string,
  lastName: string,
  firstName: string,
};

type ItemProps = {
  item: Athlete,
};

const styles = StyleSheet.create({
  itemCard: {
    marginVertical: 4,
    padding: 8,
    height: 64,
    width: '100%',
    backgroundColor: 'whitesmoke',
  },
  itemLine1 : {
    marginVertical: 2,
    fontSize: 18
  },
  itemLine2: {
    marginVertical: 2,
    fontSize: 10
  }
});

export const AthleteListCard = (props: ItemProps) => {
  const navigation = useNavigation();
  const { id, lastName,  firstName } = props.item;
  
  const handlePress = () => {
    navigation.dispatch(CommonActions.navigate({
      name: 'AthleteDetails',
      params: { athleteId: id },
    }));
  };

  return (
    <Pressable style={styles.itemCard} onPress={handlePress}>
      <Text style={styles.itemLine1}>{`${lastName}, ${firstName}`}</Text>
      <Text style={styles.itemLine2}>{id}</Text>
    </Pressable>
  );
};
