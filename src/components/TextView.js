/* eslint-disable curly */
/* eslint-disable quotes */
import styled from 'styled-components';

const Text = styled.Text`
  font-size: 14;
  font-weight: 400;
  ${({ margin }) => margin && `margin: ${margin};`}
  ${({ padding }) => padding && `padding: ${padding};`}
  ${({ color }) => color && `color: ${color};`}
  ${({ italic }) => italic && 'font-style: italic;'}
  ${({ h1 }) =>
    h1 &&
    `
    font-size: 44;
    font-weight: bold;
  `}
  ${({ h2 }) =>
    h2 &&
    `
    font-size: 38;
    font-weight: bold;
  `}
  ${({ h3 }) =>
    h3 &&
    `
    font-size: 32;
    font-weight: bold;
  `}
  ${({ h4 }) =>
    h4 &&
    `
    font-size: 28;
    font-weight: bold;
  `}
  ${({ h5 }) =>
    h5 &&
    `
    font-size: 22;
    font-weight: bold;
  `}
  ${({ h6 }) =>
    h6 &&
    `
    font-size: 18;
    font-weight: bold;
  `}
  ${({ center }) =>
    center &&
    `
    text-align: center;
  `}
  ${({ right }) =>
    right &&
    `
    align-self: flex-start;
    text-align: right;
  `}
  ${({ left }) =>
    left &&
    `
    align-self: flex-end;   
    text-align:  left;
  `}
  ${({ weight }) => {
    if (weight === 'thin') return 'font-weight: 100;';
    if (weight === 'light') return 'font-weight: 300;';
    if (weight === 'medium') return 'font-weight: 500;';
    if (weight === 'bold') return 'font-weight: 700;';
    if (weight === 'extraBold') return 'font-weight: 900;';
    if (weight) return `font-weight: ${weight};`;
  }}
`;

export default Text;
