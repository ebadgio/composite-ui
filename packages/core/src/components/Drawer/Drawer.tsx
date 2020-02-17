import * as React from 'react';
import {
  width,
  color,
  padding,
  zIndex,
  borderRight,
  borderLeft,
  right,
  left,
  WidthProps,
  BackgroundColorProps,
  PaddingProps,
  ZIndexProps,
  BorderRightProps,
  BorderLeftProps
} from 'styled-system';
import styled from '@emotion/styled';
import { spaceDefaults } from '../../config/theme';
import { transform } from '../../config/system';
import { shouldForwardProp } from '../../config/shouldForwardProp';
//import { Flex } from '../Flex';

export const Wrapper = styled('div', { shouldForwardProp })`
  position: fixed;
  display: flex;
  flex-direction: column;
  /* flex: 1 0 auto; */
  height: 100%;
  top: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transition: transform .2s cubic-bezier(0, 0, 0.2, 1) 0s;
  ${width}
  ${color}
  ${padding}
  ${zIndex}
  ${borderLeft}
  ${borderRight}
  ${right}
  ${left}
  ${transform}
`;

Wrapper.defaultProps = {
  zIndex: 3,
  backgroundColor: '#fff',
  pt: 50 + spaceDefaults[2], // defaults to size of navbar + space default
  px: spaceDefaults[3],
  width: '250px'
};

export const Offset = styled.div`
  display: flex;
  flex-grow: 1;
`;

export interface IDrawerProps
  extends WidthProps,
    BackgroundColorProps,
    PaddingProps,
    ZIndexProps,
    BorderLeftProps,
    BorderRightProps {
  children?: React.ReactNode;
  open?: boolean;
  placement?: 'left' | 'right';
}

const placementTransforms = {
  left: 'translateX(-240px)',
  right: 'translateX(240px)'
};

const Menu = (props: IDrawerProps) => {
  const placement = props.placement || 'left';
  const transform = props.open ? undefined : placementTransforms[placement];
  const right = placement === 'right' ? 0 : undefined;
  const left = placement === 'left' ? 0 : undefined;

  return (
    // <Flex width={props.width || '250px'} flexShrink={0}>
    //   <Wrapper {...props} right={props.placement === 'right' && 0} />
    // </Flex>
    <Wrapper {...props} right={right} left={left} transform={transform} />
  );
};

export class Drawer extends React.Component<IDrawerProps, {}> {
  public static Offset = Offset;

  render() {
    return <Menu {...this.props} />;
  }
}
