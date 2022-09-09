import { Text, StyleSheet } from 'react-native';
import { Screen } from './';

const styles = StyleSheet.create({
  text: {

  }
});

export const About = (props: { navigation: any}) => (
  <Screen navigation={props.navigation}>
    <Text style={styles.text}>About</Text>
  </Screen>
);