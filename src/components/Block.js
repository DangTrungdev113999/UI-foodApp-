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
  ${({ borderRadius }) => borderRadius && `border-radius: ${borderRadius}px`}
  ${({ bgColor }) => bgColor && `background-color: ${bgColor};`}
  ${({ centered }) => centered && 'justify-content: center;'}
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent}`}
  ${({ direction }) => direction && `flex-direction: ${direction};`}
  ${({ middle }) => middle && 'align-items: center;'}
  ${({ shadow }) =>
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
  ${({ style }) => style && { ...style }}
`;

export default Block;
