import React from 'react';
import { Input, IInputProps } from 'native-base';
import styles from './styles';

export const LastNameTextInput = (props: IInputProps) => (
  <Input
    placeholder='Last Name'
    style={props.style ?? styles.input}
    defaultValue={props.defaultValue}
    onChangeText={props.onChangeText}
  />
);
