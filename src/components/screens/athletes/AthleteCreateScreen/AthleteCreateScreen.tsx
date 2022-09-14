import React from 'react';
import { Pressable, Text, TextInput, StyleSheet } from 'react-native';
import { Screen } from '../../Screen';

type ListProps = {
  navigation: any,
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    width: 96,
    height: 48,
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

export const AthleteCreateScreen = (props: ListProps) => {
  const [lastName, setLastName] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [email, setEmail] = React.useState('');

  return (
    <Screen navigation={props.navigation}>
      <Text style={[styles.text]}>CREATE NEW ATHLETE</Text>
      <TextInput style={styles.input} placeholder='Last Name' value={lastName} onChangeText={text => setLastName(text)} />
      <TextInput style={styles.input} placeholder='First Name' value={firstName} onChangeText={text => setFirstName(text)}/>
      <TextInput style={styles.input} placeholder='Email' value={email} onChangeText={text => setEmail(text)}/>
      <TextInput />
      <Pressable style={styles.button}>
        <Text>OK</Text>
      </Pressable>
      <Pressable style={styles.button}>
        <Text>Cancel</Text>
      </Pressable>
    </Screen>
  );
};
