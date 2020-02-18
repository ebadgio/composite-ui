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
import shouldForwardProp from '@styled-system/should-forward-prop';
import { inputStyles, VariantStyleProps } from '../../config/variants';

export interface ITextAreaProps
  extends Merge<ColorProps, React.HTMLAttributes<HTMLTextAreaElement>>,
    BorderProps,
    SpaceProps,
    FontSizeProps,
    VariantStyleProps {
  height?: number | string;
  width?: number | string; // needed in order to avoid typescript/react error for html input elem types
}

export const TextArea = styled('textarea', { shouldForwardProp })<
  ITextAreaProps
>`
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

TextArea.defaultProps = {
  width: '100%',
  height: '100px',
  padding: '8px',
  borderRadius: '4px',
  fontSize: 1,
  variant: 'outline'
};
