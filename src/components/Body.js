import React from 'react';
import styled from 'styled-components';
import { ScrollView } from 'react-native';

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  ${({ m }) => m && `margin: ${m};`}
  ${({ p }) => p && `padding: ${p};`}
  ${({ bgColor }) => bgColor && `background-color: ${bgColor};`}
  ${({ style }) => style && { ...style }}
`;

const Body = ({ children, ...rest }) => {
  return (
    <SafeAreaView {...rest}>
      <ScrollView
        showsVerticalScrollIndicator={false}   
      >
        {children}
      </ScrollView>
    </SafeAreaView>

  );
};

export default Body;
