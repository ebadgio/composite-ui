import * as React from 'react';
import { Tab, ITab, ITabProps } from './Tab';
import { Flex } from './Flex';

export interface ITabsProps {
  tabs?: Array<ITabProps>;
  children?: Array<ITab>;
  vertical?: boolean;
}

export const Tabs = (props: ITabsProps) => {
  const renderTabs =
    props.children || props.tabs.map(tabProps => <Tab {...tabProps} />);
  const flexDirection = props.vertical ? 'column' : 'row';

  return <Flex flexDirection={flexDirection}>{renderTabs}</Flex>;
};
