import * as React from 'react';
import {
  width,
  color,
  padding,
  zIndex,
  borderRight,
  borderLeft,
  WidthProps,
  BackgroundColorProps,
  PaddingProps,
  ZIndexProps,
  BorderRightProps,
  BorderLeftProps
} from 'styled-system';
import styled from '@emotion/styled';
import { spaceDefaults } from '../../config/theme';

export const Wrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  height: 100%;
  top: 0;
  left: 0;
  box-sizing: border-box;
  overflow-y: auto;
  ${width}
  ${color}
  ${padding}
  ${zIndex}
  ${borderLeft}
  ${borderRight}
`;

Wrapper.defaultProps = {
  zIndex: 1, // below default navbar z-index
  backgroundColor: '#fff',
  pt: 50 + spaceDefaults[2], // defaults to size of navbar + space default
  px: spaceDefaults[3],
  width: '250px'
};

interface IOffsetProps {
  sidebarWidth?: string;
}

export const Offset = styled.div<IOffsetProps>`
  display: flex;
  width: ${props => `calc(100% - ${props.sidebarWidth})`};
  margin-left: ${props => props.sidebarWidth};
`;

Offset.defaultProps = {
  sidebarWidth: '250px'
};

export interface ISidebarProps
  extends WidthProps,
    BackgroundColorProps,
    PaddingProps,
    ZIndexProps,
    BorderLeftProps,
    BorderRightProps {
  children: React.ReactNode;
}

export class Sidebar extends React.Component<ISidebarProps, {}> {
  public static Offset = Offset;

  render() {
    return <Wrapper {...this.props} />;
  }
}
