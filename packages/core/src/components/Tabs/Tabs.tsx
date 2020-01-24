import * as React from 'react';
import { Tab, ITabProps } from '../Tab';
import { Flex } from '../Flex';

export interface ITabsProps {
  tabs?: Array<ITabProps>;
  children?: React.ReactNode;
  vertical?: boolean;
  activeTab?: number;
  onTabChange?: (event: React.SyntheticEvent, id: number) => void;
  variant?: string;
}

export const Tabs = (props: ITabsProps) => {
  const handleTabChange = (id: number) => (e: React.SyntheticEvent) => {
    if (props.onTabChange) {
      props.onTabChange(e, id);
    }
  };

  const renderTabs =
    props.children ||
    props.tabs.map((tabProps, idx) => (
      <Tab
        key={idx}
        {...tabProps}
        active={props.activeTab === idx}
        variant={props.variant}
        onClick={handleTabChange(idx)}
      />
    ));

  const flexDirection = props.vertical ? 'column' : 'row';

  return <Flex flexDirection={flexDirection}>{renderTabs}</Flex>;
};
