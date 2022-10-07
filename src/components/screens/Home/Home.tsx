import { Text } from 'react-native';
import { Screen } from '../Screen';
import styles from './Home.styles';

export const Home = (props: { navigation: any }) => (
  <Screen navigation={props.navigation}>
    <Text style={styles.text}>HOME CONTENT</Text>
  </Screen>
);
