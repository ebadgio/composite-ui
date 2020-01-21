import * as React from 'react';
import styled from '@emotion/styled';
import { tabStyles } from '../config/variants';
import { StyledComponent } from '@emotion/styled-base';

export interface ITabBaseProps extends VariantStyleProps {}

export const TabBase = styled.div`
  ${tabStyles}
  cursor: pointer;
`;

TabBase.defaultProps = {
  variant: 'basic'
};

export interface ITab
  extends StyledComponent<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    ITabProps,
    object
  > {}

export interface ITabProps extends ITabBaseProps {
  text?: string;
  active?: boolean;
  children?: React.ReactNode;
}

export const Tab = (props: ITabProps) => {
  const baseProps: ITabBaseProps = {
    variant: props.variant
  };

  const renderTab = props.children || props.text;

  return <TabBase {...baseProps}>{renderTab}</TabBase>;
};
