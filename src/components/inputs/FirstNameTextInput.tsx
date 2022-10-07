import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import styles from './styles';

export const FirstNameTextInput = (props: TextInputProps) => (
  <TextInput
    placeholder='First Name'
    style={props.style ?? styles.input}
    defaultValue={props.defaultValue}
    onChangeText={props.onChangeText}
  />
);
