import {
  typography,
  color,
  margin,
  MarginProps,
  TypographyProps,
  ColorProps
} from 'styled-system';
import styled from '@emotion/styled';
import * as React from 'react';

export interface ITextProps
  extends Merge<ColorProps, React.HTMLAttributes<HTMLParagraphElement>>,
    TypographyProps,
    MarginProps {}

export const Text = styled.p<ITextProps>`
  ${typography}
  ${color}
  ${margin}
`;
