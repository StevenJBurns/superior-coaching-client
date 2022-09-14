import { Pressable, Text, StyleSheet } from 'react-native';

type Athlete = {
  id: string,
  lastName: string,
  firstName: string,
};

type ItemProps = {
  item: Athlete
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

export const AthleteListCard = (props: ItemProps) => (
  <Pressable style={styles.itemCard}>
    <Text style={styles.itemLine1}>{`${props.item.lastName}, ${props.item.firstName}`}</Text>
    <Text style={styles.itemLine2}>{props.item.id}</Text>
  </Pressable>
);
