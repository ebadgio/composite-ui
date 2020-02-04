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
import shouldForwardProp from '@styled-system/should-forward-prop';
import { spaceDefaults } from '../../config/theme';

export const Wrapper = styled('div', { shouldForwardProp })`
  position: fixed;
  display: flex;
  flex-direction: column;
  height: 100%;
  top: 0;
  box-sizing: border-box;
  overflow-y: auto;
  ${width}
  ${color}
  ${padding}
  ${zIndex}
  ${borderLeft}
  ${borderRight}
  ${right}
  ${left}
`;

Wrapper.defaultProps = {
  zIndex: 1, // below default navbar z-index
  backgroundColor: '#fff',
  pt: 50 + spaceDefaults[2], // defaults to size of navbar + space default
  px: spaceDefaults[3],
  width: '250px',
  left: 0
};

interface IOffsetProps {
  sidebarWidth?: string;
  sidebarPlacement?: 'left' | 'right';
}

export const Offset = styled.div<IOffsetProps>`
  display: flex;
  width: ${props => `calc(100% - ${props.sidebarWidth})`};
  margin-left: ${props =>
    props.sidebarPlacement === 'left' && props.sidebarWidth};
  margin-right: ${props =>
    props.sidebarPlacement === 'right' && props.sidebarWidth};
`;

Offset.defaultProps = {
  sidebarWidth: '250px',
  sidebarPlacement: 'left'
};

export interface ISidebarProps
  extends WidthProps,
    BackgroundColorProps,
    PaddingProps,
    ZIndexProps,
    BorderLeftProps,
    BorderRightProps {
  children?: React.ReactNode;
  drawer?: boolean;
  open?: boolean;
  placement?: 'left' | 'right';
}

export class Sidebar extends React.Component<ISidebarProps, {}> {
  public static Offset = Offset;

  render() {
    return (
      <Wrapper {...this.props} right={this.props.placement === 'right' && 0} />
    );
  }
}
