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
  opacity,
  layout,
  LayoutProps,
  WidthProps,
  BackgroundColorProps,
  PaddingProps,
  ZIndexProps,
  BorderRightProps,
  BorderLeftProps,
  OpacityProps,
  ColorProps,
  RightProps,
  LeftProps,
  FlexShrinkProps
} from 'styled-system';
import styled from '@emotion/styled';
import { spaceDefaults } from '../../config/theme';
import { transform, TransformProps } from '../../config/system';
import {
  createShouldForwardProp,
  props
} from '@styled-system/should-forward-prop';
import { useTheme } from '../../hooks/useTheme';

const shouldForwardProp = createShouldForwardProp([
  ...props,
  'open',
  'transform'
]);

export const Wrapper = styled('div', { shouldForwardProp })<IWrapperProps>`
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

interface IWrapperProps
  extends Merge<ColorProps, React.HTMLAttributes<HTMLDivElement>>,
    WidthProps,
    PaddingProps,
    ZIndexProps,
    BorderLeftProps,
    BorderRightProps,
    RightProps,
    LeftProps,
    TransformProps,
    FlexShrinkProps {}

export interface IOverlayProps extends OpacityProps, ZIndexProps {}

export const Overlay = styled('div', { shouldForwardProp })`
  position: fixed;
  display: flex;
  height: 100vh;
  width: 100vw;
  background: #000;
  top: 0;
  left: 0;
  ${opacity}
  ${zIndex}
`;

Overlay.defaultProps = {
  zIndex: 'overlay',
  opacity: 0.1
};

export interface IDrawerOffsetProps extends LayoutProps, PaddingProps {}

export const Offset = styled.div`
  display: flex;
  box-sizing: border-box;
  ${layout}
  ${padding}
`;

Offset.defaultProps = {
  pl: [0, 0, '250px'],
  width: '100%'
};

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
  responsiveBreakpointIndex?: number;
  triggerRef?: React.RefObject<HTMLElement>;
  overlay?: IOverlayProps;
}

const placementTransforms = {
  left: 'translateX(-250px)',
  right: 'translateX(250px)'
};

const Menu = React.forwardRef(
  (
    // @ts-ignore
    {
      responsiveBreakpointIndex = 1,
      zIndex = 'drawer',
      ...props
    }: IDrawerProps,
    ref: React.RefObject<HTMLDivElement>
  ) => {
    const triggerClose = () => {
      if (props.triggerRef) {
        props.triggerRef.current.click();
      }
    };

    const theme = useTheme();
    if (
      responsiveBreakpointIndex >= theme.breakpoints.length ||
      responsiveBreakpointIndex < 0
    ) {
      throw new Error(
        `Invalid breakpoint index provided for responsiveBreakpointIndex: ${responsiveBreakpointIndex}`
      );
    }

    const placement = props.placement || 'left';
    const right = placement === 'right' ? 0 : undefined;
    const left = placement === 'left' ? 0 : undefined;
    const transform = props.open
      ? 'translateX(0)'
      : placementTransforms[placement];
    let transformProp: string | string[] = transform;

    if (props.responsive) {
      const responsiveTransformStyle = [transform];
      for (let i = 1; i < responsiveBreakpointIndex + 1; i++) {
        responsiveTransformStyle[i] = '';
      }
      responsiveTransformStyle[responsiveBreakpointIndex + 1] = 'none';
      transformProp = responsiveTransformStyle;
    }

    const wrapperProps: IWrapperProps = {
      ...props,
      right,
      left,
      transform: transformProp
    };

    return (
      <>
        <Wrapper {...wrapperProps} ref={ref} />
        {props.open && <Overlay onClick={triggerClose} {...props.overlay} />}
      </>
    );
  }
);

Menu.defaultProps = {
  backgroundColor: '#fff',
  pt: 50 + spaceDefaults[2],
  px: 3,
  width: '250px'
};

export class Drawer extends React.PureComponent<IDrawerProps, {}> {
  public static Offset = Offset;

  render() {
    return <Menu {...this.props} />;
  }
}
