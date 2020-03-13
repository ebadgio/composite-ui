import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { Tabs } from '../Tabs';
import { ThemeProvider } from '../ThemeProvider';
import { baseTheme } from '../../config/theme';
import { Tab, ITabProps } from '../Tab';
import { Navbar } from './Navbar';

describe('Navbar', () => {
  let wrapper: ReactWrapper;
  let tabs: ITabProps[];
  let title: string;

  beforeAll(() => {
    tabs = [
      {
        text: 'Tab 1'
      },
      {
        text: 'Tab 2'
      }
    ];
    title = 'Test';
  });

  it('should render proper children based on props', () => {
    wrapper = mount(
      <ThemeProvider theme={baseTheme}>
        <Navbar title={title} tabs={tabs} />
      </ThemeProvider>
    );

    expect(
      wrapper
        .find('h2')
        .first()
        .text()
    ).toEqual('Test');

    expect(wrapper.find(Tabs).find(Tab).length).toEqual(tabs.length);
  });

  it('should render children directly', () => {
    wrapper = mount(
      <ThemeProvider theme={baseTheme}>
        <Navbar title={title}>
          <Tabs>
            <Tab text={tabs[0].text} />
            <Tab text={tabs[1].text} />
          </Tabs>
        </Navbar>
      </ThemeProvider>
    );

    expect(wrapper.find(Tabs).find(Tab).length).toEqual(tabs.length);
  });
});
