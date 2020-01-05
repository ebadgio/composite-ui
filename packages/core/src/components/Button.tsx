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
// import { BaseTheme } from '../config/theme';
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
  &:focus {
    outline: none;
  }
`;

Button.defaultProps = {
  border: 0,
  borderRadius: '4px',
  fontWeight: 'bold',
  height: '40px',
  width: '100px',
  variant: 'primary'
};
