import { Text, StyleSheet } from 'react-native';
import { Screen } from './Screen';

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});

export const References = (props: { navigation: any}) => (
  <Screen navigation={props.navigation}>
    <Text style={styles.text}>REFERENCES CONTENT</Text>
  </Screen>
);
