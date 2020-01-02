import { Box, IBoxProps } from './Box';
import { flex, FlexProps } from 'styled-system';
import styled from '@emotion/styled';

export interface IFlexProps extends IBoxProps, FlexProps {}

export const Flex = styled(Box)`
  ${flex}
`;
