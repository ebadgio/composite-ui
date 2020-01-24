import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { Tabs } from './Tabs';
import { ThemeProvider } from '../ThemeProvider';
import { baseTheme } from '../../config/theme';
import { Tab, ITabProps } from '../Tab';

describe('Tabs', () => {
  let tabs: ITabProps[];
  let wrapper: ReactWrapper;

  beforeAll(() => {
    tabs = [
      {
        text: 'Tab 1'
      },
      {
        text: 'Tab 2'
      }
    ];
  });

  it('should render properly with correct props and children', () => {
    wrapper = mount(
      <ThemeProvider theme={baseTheme}>
        <Tabs tabs={tabs} variant="basic" />
      </ThemeProvider>
    );
    wrapper.find(Tab).forEach((tab, i) => {
      expect(tab.prop('variant')).toEqual('basic');
      expect(tab.find('div').text()).toEqual(tabs[i].text);
    });
  });

  it('should handle tab changes on click', () => {
    const handleTabChange = jest.fn((e: React.SyntheticEvent, i: number) => {});

    wrapper = mount(
      <ThemeProvider theme={baseTheme}>
        <Tabs tabs={tabs} variant="basic" onTabChange={handleTabChange} />
      </ThemeProvider>
    );

    wrapper.find(Tab).forEach((tab, idx) => {
      tab.simulate('click');
    });

    expect(handleTabChange).toHaveBeenCalledTimes(2);
  });
});
