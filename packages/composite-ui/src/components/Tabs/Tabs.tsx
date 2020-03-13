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
  renderTab?: (tab: React.ReactNode, key: number) => React.ReactNode;
}

export const Tabs = React.forwardRef(
  (props: ITabsProps, ref: React.RefObject<HTMLDivElement>) => {
    const handleTabChange = (id: number) => (e: React.SyntheticEvent) => {
      if (props.onTabChange) {
        props.onTabChange(e, id);
      }
    };

    const renderTabs =
      props.children ||
      props.tabs.map((tabProps, idx) => {
        const tab = (
          <Tab
            key={idx}
            {...tabProps}
            active={props.activeTab === idx}
            variant={props.variant}
            onClick={handleTabChange(idx)}
          />
        );
        if (props.renderTab) {
          return props.renderTab(tab, idx);
        }
        return tab;
      });

    const flexDirection = props.vertical ? 'column' : 'row';

    return (
      <Flex flexDirection={flexDirection} ref={ref}>
        {renderTabs}
      </Flex>
    );
  }
);
