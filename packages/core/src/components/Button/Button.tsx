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
import shouldForwardProp from '@styled-system/should-forward-prop';

export interface IButtonProps
  extends Merge<ColorProps, React.HTMLAttributes<HTMLButtonElement>>,
    SpaceProps,
    LayoutProps,
    BorderProps,
    FontSizeProps,
    FontWeightProps,
    ButtonStyleProps {}

export const Button = styled('button', { shouldForwardProp })<IButtonProps>`
  cursor: pointer;
  box-sizing: border-box;
  transition: all .25s ease;
  &:focus {
    outline: none;
  }
  ${space}
  ${layout}
  ${color}
  ${border}
  ${fontSize}
  ${fontWeight}
  ${buttonStyle}
`;

Button.defaultProps = {
  border: 0,
  borderRadius: 1,
  fontWeight: 'bold',
  height: '35px',
  padding: '0 16px',
  variant: 'primary'
};
