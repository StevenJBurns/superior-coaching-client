import React from 'react';
import { useAppSelector } from "../../../../hooks/redux";
import { FlatList, Text, StyleSheet } from 'react-native';
import { Screen } from '../../Screen';
import { AthleteCreateButton } from './AthleteCreateButton';
import { AthleteListCard } from '../AthleteListCard/AthleteListCard';

type ListProps = {
  navigation: any,
};

const styles = StyleSheet.create({
  text: {
    marginVertical: 16,
    fontWeight: 'bold',
    fontSize: 14,
  },
  flatList: {
    width: '100%',
    maxWidth: 400,
  },
});

export const AthleteListScreen = (props: ListProps) => {
  const { navigation } = props;
  const athleteList = useAppSelector(state => state.athletes.list);
  const renderItem = ({item}: any) => (<AthleteListCard item={item} />);

  return (
    <Screen navigation={navigation}>
      <AthleteCreateButton />
      <Text>{`Total Athlete Count: ${athleteList.length ?? 0}`}</Text>
      <Text style={styles.text}>Select an Athlete card below to Edit or Delete</Text>
      <FlatList
        data={athleteList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.flatList}
      />
    </Screen>
  );
};
