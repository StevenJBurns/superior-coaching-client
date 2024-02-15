import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

type Style = {
  box: ViewStyle;
  input: TextStyle;
};

const styles: Style = StyleSheet.create<Style>({
  box: {
    display: 'flex',
    paddingVertical: 4,
    maxWidth: 320
  },
  input: {
    width: 280,
  }
});

export default styles;
