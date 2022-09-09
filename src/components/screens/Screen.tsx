import { ReactNode } from 'react';
import { Pressable, View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  nav: {
    margin: 4,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  navButton: {
    margin: 4,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const Screen = (props: { children: ReactNode }): JSX.Element => (
  <>
    <View style={styles.nav}>
      <Pressable style={styles.navButton}>
        <Text>Home</Text>
      </Pressable>
      <Pressable style={styles.navButton}>
        <Text>Athletes</Text>
      </Pressable>
      <Pressable style={styles.navButton}>
        <Text>References</Text>
      </Pressable>
      <Pressable style={styles.navButton}>
        <Text>About</Text>
      </Pressable>
    </View>
    <View style={styles.content}>
      { props.children }
    </View>
  </>
);
