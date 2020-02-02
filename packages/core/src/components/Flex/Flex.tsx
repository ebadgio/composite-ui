import {
  space,
  layout,
  flexbox,
  SpaceProps,
  LayoutProps,
  FlexboxProps
} from 'styled-system';
import styled from '@emotion/styled';

export interface IFlexProps extends SpaceProps, LayoutProps, FlexboxProps {}

export const Flex = styled.div<IFlexProps>`
  display: flex;
  ${flexbox}
  ${space}
  ${layout}
`;
