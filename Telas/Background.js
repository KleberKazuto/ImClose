import React from 'react';
import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

export const Container = styled(LinearGradient).attrs({
  colors: ["#143642", "#6C584C"]
})`
  flex: 1;
`;
