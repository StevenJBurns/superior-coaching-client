import { StyleSheet, Text, View } from "react-native";
import { TextProps } from "react-native";

interface IProps extends TextProps {
  trainingPlan: any
};

const styles = StyleSheet.create({
  itemCard: {
    marginVertical: 4,
    padding: 8,
    height: 80,
    width: '100%',
    backgroundColor: '#DBDFE3',
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

export const TrainingPlanCard = (props: IProps) => {
  const { trainingPlan } = props;
  
  const formattedDate = () => new Date(trainingPlan.created.on).toDateString();

  return (
    <View style={styles.itemCard}>
      <Text>{`Athlete: ${trainingPlan.athleteId}`}</Text>
      <Text>{`Plan ID: ${trainingPlan.id}`}</Text>
      <Text>{`Created By: ${trainingPlan.created.by}`}</Text>
      <Text>{`Created On: ${formattedDate()}`}</Text>
    </View>
  );
};
