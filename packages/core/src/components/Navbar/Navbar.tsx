import * as React from 'react';
import {
  borderBottom,
  color,
  height,
  boxShadow,
  HeightProps,
  BoxShadowProps,
  ColorProps,
  BorderBottomProps
} from 'styled-system';
import styled from '@emotion/styled';
import { Tabs } from '../Tabs';
import { Flex } from '../Flex';
import { Box } from '../Box';
import { ITabProps } from '../Tab';
import { Heading } from '../Heading';

const Wrapper = styled('div')`
  ${color}
  ${boxShadow}
  ${borderBottom}
  ${height}
  width: 100%;
  position: fixed;
  z-index: 1000;
  top: 0;
  display: flex;
  justify-content: center;
`;

Wrapper.defaultProps = {
  bg: '#fff',
  height: '50px'
};

interface IWrapperProps
  extends ColorProps,
    BorderBottomProps,
    BoxShadowProps,
    HeightProps {}

export interface INavbarProps extends IWrapperProps {
  title?: string | React.ReactNode;
  theme?: object;
  tabs?: Array<ITabProps>;
  children?: React.ReactNode;
}

export const Navbar = (props: INavbarProps) => {
  const wrapperProps: IWrapperProps = {
    bg: props.bg,
    backgroundColor: props.backgroundColor,
    color: props.color,
    boxShadow: props.boxShadow,
    height: props.height,
    borderBottom: props.borderBottom
  };

  const renderTitle = (): React.ReactNode => {
    if (typeof props.title === 'string') {
      return <Heading level={2}>{props.title}</Heading>;
    }
    return props.title;
  };
  return (
    <Wrapper {...wrapperProps}>
      <Flex
        maxWidth="1400px"
        height="100%"
        p="0 20px"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
      >
        {props.title && <Box>{renderTitle()}</Box>}
        {props.children}
        {props.tabs && <Tabs tabs={props.tabs} />}
      </Flex>
    </Wrapper>
  );
};
