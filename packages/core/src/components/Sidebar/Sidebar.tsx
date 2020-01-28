import * as React from 'react';
import {
  width,
  color,
  padding,
  WidthProps,
  BackgroundColorProps,
  PaddingProps
} from 'styled-system';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  height: 100%;
  top: 0;
  left: 0;
  box-sizing: border-box;
  ${width}
  ${color}
  ${padding}
`;

export interface ISidebarProps
  extends WidthProps,
    BackgroundColorProps,
    PaddingProps {
  children: React.ReactNode;
}

export const Sidebar = (props: ISidebarProps) => {
  const wrapperProps = {
    width: props.width || '250px',
    backgroundColor: props.bg || props.backgroundColor,
    padding: props.p || props.padding,
    paddingTop: props.pt || props.paddingTop,
    paddingBottom: props.pb || props.paddingBottom,
    paddingRight: props.pr || props.paddingRight,
    paddingLeft: props.pl || props.paddingLeft,
    px: props.px,
    py: props.py
  };

  return <Wrapper {...wrapperProps}>{props.children}</Wrapper>;
};
