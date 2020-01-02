import { Box, IBoxProps } from './Box';
import { flexbox, FlexboxProps } from 'styled-system';
import styled from '@emotion/styled';

export interface IFlexProps extends IBoxProps, FlexboxProps {}

export const Flex = styled(Box)<IFlexProps>`
  ${flexbox}
`;
