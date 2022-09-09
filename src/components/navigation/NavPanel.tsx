import { ReactNode } from 'react';
import { View, StyleSheet, Text } from 'react-native';

type Props = {
  children: ReactNode,
};

const styles = StyleSheet.create({
  nav: {
    margin: 4,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export const NavPanel = (props: Props): JSX.Element => (
  <View style={styles.nav}>
    { props.children }
  </View>
)
