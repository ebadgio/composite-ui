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

const Wrapper = styled.div`
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

export interface ISidebarProps
  extends WidthProps,
    BackgroundColorProps,
    PaddingProps,
    ZIndexProps,
    BorderLeftProps,
    BorderRightProps {
  children: React.ReactNode;
}

export const Sidebar = (props: ISidebarProps) => {
  const wrapperProps = {
    width: props.width,
    backgroundColor: props.bg || props.backgroundColor,
    padding: props.p || props.padding,
    paddingTop: props.pt || props.paddingTop,
    paddingBottom: props.pb || props.paddingBottom,
    paddingRight: props.pr || props.paddingRight,
    paddingLeft: props.pl || props.paddingLeft,
    px: props.px,
    py: props.py,
    zIndex: props.zIndex,
    borderRight: props.borderRight,
    borderLeft: props.borderLeft
  };

  return <Wrapper {...wrapperProps}>{props.children}</Wrapper>;
};
