import {
  space,
  layout,
  flexbox,
  SpaceProps,
  LayoutProps,
  FlexboxProps
} from 'styled-system';
import styled from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';

export interface IFlexProps extends SpaceProps, LayoutProps, FlexboxProps {}

export const Flex = styled('div', { shouldForwardProp })<IFlexProps>`
  display: flex;
  ${flexbox}
  ${space}
  ${layout}
`;
