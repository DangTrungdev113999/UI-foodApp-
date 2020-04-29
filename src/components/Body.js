import React from 'react';
import styled from 'styled-components';

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
      {children}
    </SafeAreaView>

  );
};

export default Body;
