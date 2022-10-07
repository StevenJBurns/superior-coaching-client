import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

type Style = {
  input: TextStyle;
};

const styles: Style = StyleSheet.create<Style>({
  input: {
    width: 160,
  }
});

export default styles;
