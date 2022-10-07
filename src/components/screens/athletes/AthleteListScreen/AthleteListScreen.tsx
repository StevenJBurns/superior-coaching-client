import React from 'react';
import { FlatList, Text } from 'react-native';
import { Screen } from '../../Screen';
import { AthleteCreateButton } from './AthleteCreateButton';
import { AthleteListCard } from '../AthleteListCard/AthleteListCard';
import { useAthleteList } from "../../../../hooks/";
import styles from './AthleteListScreen.styles';

type ListProps = {
  navigation: any,
};

export const AthleteListScreen = (props: ListProps) => {
  const { navigation } = props;
  const { athleteList } = useAthleteList();
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
