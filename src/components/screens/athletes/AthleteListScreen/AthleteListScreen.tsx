import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import { Screen } from '../../Screen';
import { AthleteCreateButton } from './AthleteCreateButton';
import { AthleteListCard } from '../AthleteListCard/AthleteListCard';
import mockAthleteData from '../../../../data/athletes.json';

type ListProps = {
  navigation: any,
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  flatList: {
    width: '100%',
    maxWidth: 400,
  },
});

export const AthleteListScreen = (props: ListProps) => {
  const { navigation } = props;
  const renderItem = ({item}: any) => (<AthleteListCard item={item} />);

  return (
    <Screen navigation={navigation}>
      <Text style={styles.text}>ATHLETE CONTENT</Text>
      <Text>{`Total Athlete Count: ${mockAthleteData.length ?? 0}`}</Text>
      <AthleteCreateButton />
      <FlatList
        data={mockAthleteData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.flatList} />
    </Screen>
  );
};
