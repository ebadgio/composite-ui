import {
  space,
  layout,
  color,
  border,
  boxShadow,
  position,
  PositionProps,
  SpaceProps,
  LayoutProps,
  ColorProps,
  BorderProps,
  BoxShadowProps,
  BackgroundColorProps
} from 'styled-system';
import styled from '@emotion/styled';
import * as React from 'react';
import shouldForwardProp from '@styled-system/should-forward-prop';

export interface IBoxProps
  extends Merge<ColorProps, React.HTMLAttributes<HTMLDivElement>>,
    SpaceProps,
    LayoutProps,
    BorderProps,
    BoxShadowProps,
    BackgroundColorProps,
    PositionProps {
  as?: string | React.ReactNode;
}

export const Box = styled('div', { shouldForwardProp })<IBoxProps>`
  box-sizing: border-box;
  ${space}
  ${layout}
  ${color}
  ${border}
  ${boxShadow}
  ${position}
`;
