import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { ThemeProvider } from '../ThemeProvider';
import { baseTheme } from '../../config/theme';
import { Drawer, Wrapper, Offset } from './Drawer';
import { Heading } from '../Heading';

describe('Navbar', () => {
  let wrapper: ReactWrapper;
  let heading: string;
  let heading2: string;

  beforeAll(() => {
    heading = 'This is a drawer';
    heading2 = 'This is the offset content';
  });

  it('renders with children', () => {
    wrapper = mount(
      <ThemeProvider theme={baseTheme}>
        <Drawer>
          <Heading>{heading}</Heading>
        </Drawer>
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
        <Drawer width="300px" bg="black">
          <Heading>{heading}</Heading>
        </Drawer>
      </ThemeProvider>
    );

    expect(wrapper.find(Wrapper).prop('width')).toEqual('300px');
    expect(wrapper.find(Wrapper).prop('bg')).toEqual('black');
  });

  it('renders Drawer.Offset properly', () => {
    wrapper = mount(
      <ThemeProvider theme={baseTheme}>
        <Drawer width="300px" bg="black">
          <Heading>{heading}</Heading>
        </Drawer>
        <Drawer.Offset>
          <Heading>{heading2}</Heading>
        </Drawer.Offset>
      </ThemeProvider>
    );

    expect(
      wrapper
        .find(Offset)
        .find(Heading)
        .text()
    ).toEqual(heading2);
  });
});
