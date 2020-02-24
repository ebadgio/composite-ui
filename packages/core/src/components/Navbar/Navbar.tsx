import * as React from 'react';
import {
  borderBottom,
  color,
  height,
  boxShadow,
  zIndex,
  HeightProps,
  BoxShadowProps,
  ColorProps,
  BorderBottomProps,
  ZIndexProps
} from 'styled-system';
import styled from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';
import { Tabs } from '../Tabs';
import { Flex } from '../Flex';
import { Box } from '../Box';
import { ITabProps } from '../Tab';
import { Heading } from '../Heading';

const Wrapper = styled('div', { shouldForwardProp })`
  width: 100%;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  left: 0;
  ${color}
  ${boxShadow}
  ${borderBottom}
  ${height}
  ${zIndex}
`;

Wrapper.defaultProps = {
  bg: '#fff',
  height: '50px',
  zIndex: 3
};

interface IWrapperProps
  extends ColorProps,
    BorderBottomProps,
    BoxShadowProps,
    HeightProps,
    ZIndexProps {}

export interface INavbarProps extends IWrapperProps {
  title?: string | React.ReactNode;
  theme?: object;
  tabs?: Array<ITabProps>;
  children?: React.ReactNode;
}

export const Navbar = React.forwardRef(
  (props: INavbarProps, ref: React.RefObject<HTMLDivElement>) => {
    const wrapperProps: IWrapperProps = {
      bg: props.bg,
      backgroundColor: props.backgroundColor,
      color: props.color,
      boxShadow: props.boxShadow,
      height: props.height,
      borderBottom: props.borderBottom,
      zIndex: props.zIndex,
      opacity: props.opacity
    };

    const renderTitle = (): React.ReactNode => {
      if (typeof props.title === 'string') {
        return <Heading level={2}>{props.title}</Heading>;
      }
      return props.title;
    };
    return (
      <Wrapper {...wrapperProps} ref={ref}>
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
  }
);
