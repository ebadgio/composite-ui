import {
  space,
  layout,
  grid,
  SpaceProps,
  LayoutProps,
  GridProps
} from 'styled-system';
import styled from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';

export interface IGridProps extends SpaceProps, LayoutProps, GridProps {}

export const Grid = styled('div', { shouldForwardProp })<IGridProps>`
  display: grid;
  ${grid}
  ${space}
  ${layout}
`;
