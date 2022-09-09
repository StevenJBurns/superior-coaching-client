import { Text, StyleSheet } from 'react-native';
import { Screen } from '.';


const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});

export const Planning = (props: { navigation: any}) => (
  <Screen navigation={props.navigation}>
    <Text style={styles.text}>PLANNING CONTENT</Text>
  </Screen>
);