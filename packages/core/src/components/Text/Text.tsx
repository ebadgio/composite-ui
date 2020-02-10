import {
  typography,
  color,
  margin,
  MarginProps,
  TypographyProps,
  ColorProps
} from 'styled-system';
import styled from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';
import * as React from 'react';

export interface ITextProps
  extends Merge<ColorProps, React.HTMLAttributes<HTMLParagraphElement>>,
    TypographyProps,
    MarginProps {}

export const Text = styled('p', { shouldForwardProp })<ITextProps>`
  ${typography}
  ${color}
  ${margin}
`;

Text.defaultProps = {
  fontSize: '16px',
  lineHeight: '1.4em',
  color: 'text.primary'
};
