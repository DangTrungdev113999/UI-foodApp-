import React from 'react';
import styled from 'styled-components';

const TouchableOpacity = styled.TouchableOpacity`
  ${({block}) => block && 'flex: 1;'}
  ${({flex}) => flex && ` flex: ${flex}`}
  ${({width}) => width && `width: ${width};`}
  ${({height}) => height && `height: ${height};`}
  ${({m}) => m && `margin: ${m};`}
  ${({p}) => p && `padding: ${p};`}
  ${({border}) =>
    border &&
    `
    border-width: 1px;
    border-color: gray;
  `}
  ${({borderWidth}) => borderWidth && `border-width: ${borderWidth}px;`}
  ${({borderColor}) => borderColor && `border-color: ${borderColor};`}
  ${({borderRadius}) => borderRadius && `border-radius: ${borderRadius}px`}
  ${({bgColor}) => bgColor && `background-color: ${bgColor};`}
  ${({direction}) => direction && `flex-direction: ${direction};`}
  ${({centered}) => centered && 'justify-content: center;'}
  ${({middle}) => middle && 'align-items: center;'}
  ${({justifyContent}) =>
    justifyContent && `justify-content: ${justifyContent}`}
  ${({shadow}) =>
    shadow &&
    `
    shadow-opacity: 0.14;
    shadow-color: #000;
    shadow-radius: 4px;
    elevation: 4px;
    shawdow-offset: {
      height: 0,
      width: 0
    }
  `}
  ${({style}) => style && {...style}}
`;

const Button = ({children, onPress, ...rest}) => (
  <TouchableOpacity onPress={onPress} {...rest}>
    {children}
  </TouchableOpacity>
);

export default Button;
