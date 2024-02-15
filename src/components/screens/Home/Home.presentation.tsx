import { FlatList, Text } from 'react-native';
import { Screen } from '../Screen';
import { useViewModel } from './Home.viewmodel';
import { TrainingPlanList } from './TrainingPlanList/TrainingPlanList';
import styles from './Home.styles';

export const Home = (props: { navigation: any }) => {
  const { trainingPlans } = useViewModel();
  
  return (
    <Screen navigation={props.navigation}>
      <Text style={styles.text}>HOME CONTENT</Text>
      <TrainingPlanList data={trainingPlans} style={styles.flatList} />
    </Screen>
  );
}
