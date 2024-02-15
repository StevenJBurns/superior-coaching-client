import React from 'react';
import { Box, IInputProps } from 'native-base';
import { TextInput } from 'react-native-paper';
import styles from './styles';

export const FirstNameTextInput = (props: IInputProps) => (
  <Box style={styles.box}>
    <TextInput
      label='First Name'
      placeholder='First Name'
      style={props.style ?? styles.input}
      defaultValue={props.defaultValue}
      onChangeText={props.onChangeText}
      mode='outlined'
      dense
    />
  </Box>
);
