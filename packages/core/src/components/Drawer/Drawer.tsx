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
  flexShrink,
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
import {
  createShouldForwardProp,
  props
} from '@styled-system/should-forward-prop';
import { Flex } from '../Flex';
import { useWindowMatch } from '../../hooks/useWindowMatch';

export const shouldForwardProp = createShouldForwardProp([...props, 'open']);

export const Wrapper = styled('div', { shouldForwardProp })`
  position: fixed;
  display: flex;
  flex-direction: column;
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
  ${flexShrink}
`;

Wrapper.defaultProps = {
  zIndex: 1,
  backgroundColor: '#fff',
  pt: 50 + spaceDefaults[2],
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
  responsive?: boolean;
  triggerRef?: React.RefObject<HTMLElement>;
}

const placementTransforms = {
  left: 'translateX(-250px)',
  right: 'translateX(250px)'
};

const Menu = (props: IDrawerProps) => {
  const handleChange = (match: boolean) => {
    if (props.triggerRef) {
      /*
        There are two cases where we want to click the trigger to change the drawer state:
        1. If the drawer is open and we are now below resize threshold then close the drawer
        2. If the drawer is closed and we are now above resize threshold
      */
      if ((open && match) || (open && !match)) {
        props.triggerRef.current.click();
      }
    }
  };

  const matches = useWindowMatch('790px', handleChange);

  // Determine variable props for wrapper
  const placement = props.placement || 'left';
  const transform = props.open ? undefined : placementTransforms[placement];
  const right = placement === 'right' ? 0 : undefined;
  const left = placement === 'left' ? 0 : undefined;

  // Create wrapper element
  const wrapper = (
    <Wrapper
      {...props}
      right={right}
      left={left}
      transform={transform}
      flexShrink={0}
    />
  );

  // Only use the flex element when we want a responsize drawer
  if (props.responsive && !matches && props.open) {
    return (
      <Flex width={props.width || '250px'} flexShrink={0}>
        {wrapper}
      </Flex>
    );
  }

  return wrapper;
};

export class Drawer extends React.Component<IDrawerProps, {}> {
  public static Offset = Offset;

  render() {
    return <Menu {...this.props} />;
  }
}
