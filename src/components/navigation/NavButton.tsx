import { ReactNode } from 'react';
import { Pressable, View, StyleSheet, Text } from 'react-native';


type Props = {
  title?: string,
  navigation: any,
};

const styles = StyleSheet.create({
  navButton: {
    margin: 4,
  },
});

export const NavButton = (props: Props): JSX.Element => {
  const handlePress = () => {
    props.navigation.navigate(props.title);
  };

  return (
    <Pressable style={styles.navButton} onPress={handlePress}>
      <Text>{props.title}</Text>
    </Pressable>
  );
}
