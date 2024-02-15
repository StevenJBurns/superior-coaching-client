import React from 'react';
import { Box, IInputProps } from 'native-base';
import { TextInput } from 'react-native-paper';
import styles from './styles';

export const ChronologicalAgeTextInput = (props: IInputProps) => (
  <Box style={styles.box}>
    <TextInput
      label='Chronological Age'
      placeholder='Chronological Age'
      style={props.style ?? styles.input}
      defaultValue={props.defaultValue || undefined}
      onChangeText={props.onChangeText}
      mode='outlined'
      dense
    />
  </Box>
);
