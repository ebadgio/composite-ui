import {
  space,
  layout,
  color,
  border,
  boxShadow,
  SpaceProps,
  LayoutProps,
  ColorProps,
  BorderProps,
  BoxShadowProps,
  BackgroundColorProps
} from 'styled-system';
import styled from '@emotion/styled';
import * as React from 'react';

export interface IBoxProps
  extends Merge<ColorProps, React.HTMLAttributes<HTMLDivElement>>,
    SpaceProps,
    LayoutProps,
    BorderProps,
    BoxShadowProps,
    BackgroundColorProps {}

export const Box = styled.div<IBoxProps>`
  box-sizing: border-box;
  ${space}
  ${layout}
  ${color}
  ${border}
  ${boxShadow}
`;
