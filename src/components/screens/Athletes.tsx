import { Text, StyleSheet } from 'react-native';
import { Screen } from './';

const styles = StyleSheet.create({
  text: {

  }
});

export const Athletes = (props: { navigation: any}) => (
  <Screen navigation={props.navigation}>
    <Text style={styles.text}>Athletes</Text>
  </Screen>
);
