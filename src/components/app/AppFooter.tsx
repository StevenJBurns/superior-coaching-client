import { View, Text } from "react-native";

export const AppFooter = () => {
  const year = new Date().getFullYear();

  return (
  <View style={{padding: 24, alignItems: 'center', backgroundColor: 'slategrey'}}>
    <Text style={{ color: 'gainsboro', fontSize: 16, fontWeight: 'bold' }}>
      {`\u00A9${year}`}
    </Text>
  </View>
  );
};
