import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import styles from './styles';

export const EmailContactTextInput = (props: TextInputProps) => (
  <TextInput
    placeholder='Email'
    style={props.style ?? styles.input}
    defaultValue={props.defaultValue}
    onChangeText={props.onChangeText}
  />
);
