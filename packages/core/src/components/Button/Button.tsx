import {
  space,
  layout,
  color,
  border,
  fontSize,
  fontWeight,
  SpaceProps,
  LayoutProps,
  ColorProps,
  BorderProps,
  FontSizeProps,
  FontWeightProps,
  buttonStyle,
  ButtonStyleProps
} from 'styled-system';
import styled from '@emotion/styled';
import * as React from 'react';

export interface IButtonProps
  extends Merge<ColorProps, React.HTMLAttributes<HTMLButtonElement>>,
    SpaceProps,
    LayoutProps,
    BorderProps,
    FontSizeProps,
    FontWeightProps,
    ButtonStyleProps {}

export const Button = styled.button<IButtonProps>`
  ${space}
  ${layout}
  ${color}
  ${border}
  ${fontSize}
  ${fontWeight}
  ${buttonStyle}
  cursor: pointer;
  box-sizing: border-box;
  transition: background .25s ease, background-color .25s ease;
  &:focus {
    outline: none;
  }
`;

Button.defaultProps = {
  border: 0,
  borderRadius: '4px',
  fontWeight: 'bold',
  height: '35px',
  padding: '0 16px',
  variant: 'primary'
};
