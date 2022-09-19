import { Text, TextInput, View } from "react-native";

type Props = {
  editable: boolean;
};

export const AthleteLastNameInput = (props: Props) => {
  const { editable } = props; 

  return (
    <View>
      { editable === true ? <TextInput /> : <Text />}
    </View>
  );
};
