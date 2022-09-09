import { FunctionComponent, ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';

type Props = {
  children: ReactNode,
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const Screen = (props: Props): JSX.Element => {
  const { children } = props;

  return (
    <View style={styles.view}>
      { children }
    </View>
  );
};
