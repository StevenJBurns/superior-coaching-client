import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import styles from './styles';

export const PhoneContactTextInput = (props: TextInputProps) => (
  <TextInput
    placeholder='Phone'
    style={props.style ?? styles.input}
    defaultValue={props.defaultValue}
    onChangeText={props.onChangeText}
  />
);
