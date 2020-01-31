import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { ThemeProvider } from '../ThemeProvider';
import { baseTheme } from '../../config/theme';
import { Sidebar, Wrapper, Offset } from './Sidebar';
import { Heading } from '../Heading';

describe('Navbar', () => {
  let wrapper: ReactWrapper;
  let heading: string;
  let heading2: string;

  beforeAll(() => {
    heading = 'This is a sidebar';
    heading2 = 'This is the offset content';
  });

  it('renders with children', () => {
    wrapper = mount(
      <ThemeProvider theme={baseTheme}>
        <Sidebar>
          <Heading>{heading}</Heading>
        </Sidebar>
      </ThemeProvider>
    );

    expect(
      wrapper
        .find(Heading)
        .first()
        .text()
    ).toEqual(heading);
  });

  it('passes wrapper props', () => {
    wrapper = mount(
      <ThemeProvider theme={baseTheme}>
        <Sidebar width="300px" bg="black">
          <Heading>{heading}</Heading>
        </Sidebar>
      </ThemeProvider>
    );

    expect(wrapper.find(Wrapper).prop('width')).toEqual('300px');
    expect(wrapper.find(Wrapper).prop('bg')).toEqual('black');
  });

  it('renders Sidebar.Offset properly', () => {
    wrapper = mount(
      <ThemeProvider theme={baseTheme}>
        <Sidebar width="300px" bg="black">
          <Heading>{heading}</Heading>
        </Sidebar>
        <Sidebar.Offset sidebarWidth="300px">
          <Heading>{heading2}</Heading>
        </Sidebar.Offset>
      </ThemeProvider>
    );

    expect(
      wrapper
        .find(Offset)
        .find(Heading)
        .text()
    ).toEqual(heading2);
    expect(wrapper.find(Offset).prop('sidebarWidth')).toEqual('300px');
  });

  it('handles placement correctly', () => {
    wrapper = mount(
      <ThemeProvider theme={baseTheme}>
        <Sidebar width="300px" bg="black" placement="right">
          <Heading>{heading}</Heading>
        </Sidebar>
        <Sidebar.Offset sidebarWidth="300px" sidebarPlacement="right">
          <Heading>{heading2}</Heading>
        </Sidebar.Offset>
      </ThemeProvider>
    );

    expect(wrapper.find(Wrapper).prop('right')).toEqual(0);
  });
});
