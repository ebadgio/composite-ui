import {
  width,
  height,
  color,
  border,
  space,
  fontSize,
  FontSizeProps,
  ColorProps,
  BorderProps,
  SpaceProps
} from 'styled-system';
import styled from '@emotion/styled';
import * as React from 'react';
import { inputStyles } from '../config/variants';

export interface IInputProps
  extends Merge<ColorProps, React.HTMLAttributes<HTMLInputElement>>,
    BorderProps,
    SpaceProps,
    FontSizeProps,
    VariantStyleProps {
  height: number | string;
  width: number | string; // needed in order to avoid typescript/react error for html input elem types
}

export const Input = styled.input<IInputProps>`
  ${width}
  ${height}
  ${fontSize}
  ${color}
  ${border}
  ${space}
  ${inputStyles}
  box-sizing: border-box;
  &:focus {
    outline: none;
  }
`;

Input.defaultProps = {
  width: '100%',
  height: '35px',
  padding: '8px',
  borderRadius: '4px',
  fontSize: 1,
  variant: 'outline'
};
