import { FlatList, FlatListProps, ViewStyle } from "react-native";
import { TrainingPlanCard } from '../TrainingPlanCard/TrainingPlanCard';

interface IProps {
  data: Array<any>;
  style: ViewStyle;
}

export const TrainingPlanList = (props: IProps) => {
  console.log(props.data);
  const renderItem = ({item}: any) => <TrainingPlanCard trainingPlan={item} />

  return (
    <FlatList
      data={props.data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};
