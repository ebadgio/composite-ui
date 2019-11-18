import {
  space,
  layout,
  color,
  border,
  SpaceProps,
  LayoutProps,
  ColorProps,
  BorderProps
} from 'styled-system';
import styled from '@emotion/styled';
import * as React from 'react';

export interface IBoxProps
  extends Merge<ColorProps, React.HTMLAttributes<HTMLDivElement>>,
    SpaceProps,
    LayoutProps,
    BorderProps {}

export const Box = styled.div<IBoxProps>`
  ${space}
  ${layout}
  ${color}
  ${border}
`;
