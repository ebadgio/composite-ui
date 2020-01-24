import * as React from 'react';
import styled from '@emotion/styled';
import { tabStyles, activeTabStyleFn } from '../../config/variants';

interface ITabBaseProps extends VariantStyleProps {
  onClick?: (e: React.SyntheticEvent) => void;
  active?: boolean;
}

const TabBase = styled.div`
  ${tabStyles}
  ${activeTabStyleFn}
  cursor: pointer;
`;

TabBase.defaultProps = {
  variant: 'basic'
};

export interface ITabProps extends ITabBaseProps {
  text?: string;
  children?: React.ReactNode;
}

export const Tab = (props: ITabProps) => {
  const baseProps: ITabBaseProps = {
    variant: props.variant,
    onClick: props.onClick,
    active: props.active
  };

  const renderTab = props.children || props.text;

  return <TabBase {...baseProps}>{renderTab}</TabBase>;
};
