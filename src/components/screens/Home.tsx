import { Text, StyleSheet } from 'react-native';
import { Screen } from './';

const styles = StyleSheet.create({
  text: {

  }
});

export const Home = (props: { navigation: any }) => (
  <Screen navigation={props.navigation}>
    <Text style={styles.text}>HOME</Text>
  </Screen>
);
