import React from 'react';
import { Box, IInputProps } from 'native-base';
import { TextInput } from 'react-native-paper';
import styles from './styles';

export const LastNameTextInput = (props: IInputProps) => (
  <Box style={styles.box}>
    <TextInput
      label='Last Name'
      placeholder='Last Name'
      style={props.style ?? styles.input}
      defaultValue={props.defaultValue}
      onChangeText={props.onChangeText}
      mode='outlined'
      dense
    />
  </Box>
);
