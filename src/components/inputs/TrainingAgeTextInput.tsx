import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import styles from './styles';

export const TrainingAgeTextInput = (props: TextInputProps) => (
  <TextInput
    placeholder='Training Age'
    style={props.style ?? styles.input}
    defaultValue={props.defaultValue || undefined}
    onChangeText={props.onChangeText}
  />
);
