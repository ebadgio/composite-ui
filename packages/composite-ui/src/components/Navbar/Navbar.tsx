import * as React from 'react';
import {
  borderBottom,
  color,
  height,
  boxShadow,
  zIndex,
  position,
  padding,
  flexbox,
  FlexboxProps,
  PaddingProps,
  PositionProps,
  HeightProps,
  BoxShadowProps,
  ColorProps,
  BorderBottomProps
} from 'styled-system';
import styled from '@emotion/styled';
import {
  createShouldForwardProp,
  props
} from '@styled-system/should-forward-prop';
import { ZIndexProps } from '../../config/system';
import { Tabs } from '../Tabs';
import { Box } from '../Box';
import { ITabProps } from '../Tab';
import { Heading } from '../Heading';

const shouldForwardProp = createShouldForwardProp([...props, 'title']);

const Wrapper = styled('div', { shouldForwardProp })`
  width: 100%;
  top: 0;
  display: flex;
  left: 0;
  ${color}
  ${boxShadow}
  ${borderBottom}
  ${height}
  ${zIndex}
  ${position}
  ${padding}
  ${flexbox}
`;

interface IWrapperProps
  extends ColorProps,
    BorderBottomProps,
    BoxShadowProps,
    HeightProps,
    Merge<PositionProps, ZIndexProps>,
    PaddingProps,
    FlexboxProps {}

export interface INavbarProps extends IWrapperProps {
  title?: string | React.ReactNode;
  theme?: object;
  tabs?: Array<ITabProps>;
  children?: React.ReactNode;
}

export const Navbar = React.forwardRef(
  (props: INavbarProps, ref: React.RefObject<HTMLDivElement>) => {
    const wrapperProps: IWrapperProps = { ...props };

    const renderTitle = (): React.ReactNode => {
      if (typeof props.title === 'string') {
        return (
          <Heading level={2} mb={0} mt={0}>
            {props.title}
          </Heading>
        );
      }
      return props.title;
    };
    return (
      <Wrapper {...wrapperProps} ref={ref}>
        {props.title && <Box>{renderTitle()}</Box>}
        {props.children}
        {props.tabs && <Tabs tabs={props.tabs} />}
      </Wrapper>
    );
  }
);

Navbar.defaultProps = {
  bg: '#fff',
  height: '50px',
  zIndex: 'navbar',
  position: 'fixed',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 20px'
};
