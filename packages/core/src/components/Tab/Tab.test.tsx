import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { Tab } from './Tab';
import { ThemeProvider } from '../ThemeProvider';
import { baseTheme } from '../../config/theme';

describe('Tab', () => {
  let wrapper: ReactWrapper;

  it('should render properly with correct props and children', () => {
    wrapper = mount(
      <ThemeProvider theme={baseTheme}>
        <Tab active />
      </ThemeProvider>
    );
    expect(wrapper.find(Tab).prop('active')).toEqual(true);
    expect(
      wrapper
        .find('div')
        .first()
        .hasClass(/(css-).+/)
    ).toBe(true);
    expect(
      wrapper
        .find('div')
        .last()
        .hasClass(/(css-).+/)
    ).toBe(true);
  });

  it('should call click handler', () => {
    const handleTabClick = jest.fn((e: React.SyntheticEvent) => {});

    wrapper = mount(
      <ThemeProvider theme={baseTheme}>
        <Tab onClick={handleTabClick} />
      </ThemeProvider>
    );

    wrapper.find(Tab).simulate('click');
    expect(handleTabClick).toHaveBeenCalled();
  });
});
