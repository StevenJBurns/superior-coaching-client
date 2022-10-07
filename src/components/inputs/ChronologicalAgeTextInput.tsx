import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import styles from './styles';

export const ChronologicalAgeTextInput = (props: TextInputProps) => (
  <TextInput
    placeholder='Chronological Age'
    style={props.style ?? styles.input}
    defaultValue={props.defaultValue || undefined}
    onChangeText={props.onChangeText}
  />
);
