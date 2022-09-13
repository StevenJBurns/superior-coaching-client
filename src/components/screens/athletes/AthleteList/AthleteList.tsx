import React from 'react';
import { FlatList, Pressable, Text, StyleSheet, View } from 'react-native';
import { Screen } from '../../Screen';
import { AthleteListCard } from './AthleteListCard';
import mockAthleteData from '../../../../data/athletes.json';

type ListProps = {
  navigation: any,
};

const styles = StyleSheet.create({
  createCardContainer: {
    marginVertical: 12,
    padding: 8,
    backgroundColor: 'green',
  },
  createCardButton: {
    marginVertical: 12,
    padding: 8,
    backgroundColor: 'lightGreen',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  flatList: {
    width: '90%',
    maxWidth: 320,
  },
  itemCard: {
    margin: 4,
    padding: 8,
    height: 64,
    backgroundColor: 'silver',
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

export const AthleteList = (props: ListProps) => {
  const [selectedId, setSelectedId] = React.useState();
  const renderItem = ({item}: any) => (<AthleteListCard item={item} />);

  return (
    <Screen navigation={props.navigation}>
      <Text style={styles.text}>ATHLETE CONTENT</Text>
      <View style={styles.createCardContainer}>
        <Pressable style={styles.createCardButton}>
          <Text>Create New Athlete Card</Text>
        </Pressable>
      </View>
      <FlatList
        data={mockAthleteData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.flatList} />
    </Screen>
  );
};
