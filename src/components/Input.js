import React from 'react';
import styled from 'styled-components';

const TextInput = styled.TextInput`
  ${({margin}) => margin && `margin: ${margin};`}
  ${({padding}) => padding && `padding: ${padding};`}
  ${({border}) =>
    border &&
    `
    border-width: 1;
    border-color: gray;
  `}
  ${({radius}) => radius && 'border-radius: 8;'}
  ${({fontSize}) => fontSize && `font-size: ${fontSize};`}
  ${({style}) => style && {...style}}
`;

const Input = ({onTextChange, value, placeholder, style, ...rest}) => {
  return (
    <TextInput
      placeholder={placeholder}
      onTextChange={onTextChange}
      value={value}
      style={style}
      {...rest}
    />
  );
};

export default Input;
