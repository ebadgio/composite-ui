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

  it('should render with Tab as children', () => {
    wrapper = mount(
      <ThemeProvider theme={baseTheme}>
        <Tabs>
          <Tab>{tabs[0].text}</Tab>
          <Tab>{tabs[1].text}</Tab>
        </Tabs>
      </ThemeProvider>
    );
    wrapper.find(Tab).forEach((tab, i) => {
      expect(tab.find('div').text()).toEqual(tabs[i].text);
    });
  });

  it('should handle tab changes on click', () => {
    const handleTabChange = jest.fn(
      (_e: React.SyntheticEvent, _id: number) => {}
    );

    wrapper = mount(
      <ThemeProvider theme={baseTheme}>
        <Tabs tabs={tabs} variant="basic" onTabChange={handleTabChange} />
      </ThemeProvider>
    );

    wrapper.find(Tab).forEach((tab, _idx) => {
      tab.simulate('click');
    });

    expect(handleTabChange).toHaveBeenCalledTimes(2);
  });

  it('should handle variant props', () => {
    wrapper = mount(
      <ThemeProvider theme={baseTheme}>
        <Tabs tabs={tabs} variant="outline" />
      </ThemeProvider>
    );
    wrapper.find(Tab).forEach(tab => {
      expect(tab.prop('variant')).toEqual('outline');
    });
  });

  it('should handle renderTab prop', () => {
    const renderTab = jest.fn().mockImplementation((tab, key) => {
      return <a key={key}>{tab}</a>;
    });

    wrapper = mount(
      <ThemeProvider theme={baseTheme}>
        <Tabs tabs={tabs} variant="outline" renderTab={renderTab} />
      </ThemeProvider>
    );

    expect(renderTab).toHaveBeenCalled();
    expect(wrapper.find('a').length).toEqual(2);
    expect(wrapper.find(Tab).length).toEqual(2);
  });
});
