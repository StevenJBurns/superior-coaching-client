import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  screenActionsView : {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    margin: 4,
    padding: 8,
    width: 96,
    borderRadius: 4,
    backgroundColor: 'lightblue',
    textAlign: 'center',
    color: 'white',
  },
  input: {
    width: 160,
    margin: 2,
    padding: 8,
    borderColor: "gray",
    borderRadius: 4,
    borderWidth: 1,
  }
});

export default styles;
