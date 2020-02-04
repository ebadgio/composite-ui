import * as React from 'react';
import styled from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';
import { tabStyles, activeTabStyleFn } from '../../config/variants';
import { colors } from '../../config/theme';

interface ITabBaseProps extends VariantStyleProps {
  onClick?: (e: React.SyntheticEvent) => void;
  active?: boolean;
}

const TabBase = styled('div', { shouldForwardProp })`
  box-sizing: border-box;
  padding: 12px 16px;
  cursor: pointer;
  position: relative;
  color: ${colors.gray};
  transition: all 0.25s ease;
  ${tabStyles}
  ${activeTabStyleFn}
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
