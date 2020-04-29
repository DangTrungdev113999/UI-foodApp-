import styled from 'styled-components';

const Block = styled.View`
  ${({ flex }) => flex && `flex: ${flex};`}
  ${({ width }) => width && `width: ${width};`}
  ${({ height }) => height && `height: ${height};`}
  ${({ m }) => m && `margin: ${m};`}
  ${({ p }) => p && `padding: ${p};`}
  ${({ border }) =>
    border &&
    `
    border-width: 1px;
    border-color: gray;
  `}
  ${({ borderWidth }) => borderWidth && `border-width: ${borderWidth}px;`}
  ${({ borderColor }) => borderColor && `border-color: ${borderColor};`}
  ${({ borderRadius }) => borderRadius && `border-radius: ${borderRadius}`}
  ${({ bgColor }) => bgColor && `background-color: ${bgColor};`}
  ${({ centered }) => centered && 'justify-content: center;'}
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent}`}
  ${({ direction }) => direction && `flex-direction: ${direction};`}
  ${({ middle }) => middle && 'align-items: center;'}
  ${({ shadow }) =>
    shadow &&
    `
    shadow-opacity: 0.5;
    shadow-radius: 20;
    shadow-color: #000;
    shawdow-offset: {
      width: 10,
      height: 10,
    };
  `}
  ${({ block }) => block && 'width: 100%'}
  ${({ style }) => style && { ...style }}
`;

export default Block;
