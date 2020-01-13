import * as React from 'react';
import { mount } from 'enzyme';
import { Button } from '../src/components/Button';
import { ThemeProvider } from '../src/components/ThemeProvider';
import { baseTheme } from '../src/config/theme';

describe('Button', () => {
  it('should render properly with correct props and children', () => {
    const wrapper = mount(
      <ThemeProvider theme={baseTheme}>
        <Button>Hello</Button>
      </ThemeProvider>
    );
    expect(
      wrapper
        .find(Button)
        .first()
        .prop('variant')
    ).toEqual('primary');
    expect(
      wrapper
        .find('button')
        .first()
        .hasClass(/(css-).+/)
    ).toEqual(true);
    expect(
      wrapper
        .find('button')
        .first()
        .text()
    ).toEqual('Hello');
  });

  it('should execute onClick function when click event is triggered', () => {
    const clickFunc = jest.fn(() => {});
    const wrapper = mount(
      <ThemeProvider theme={baseTheme}>
        <Button onClick={clickFunc}>Hello</Button>
      </ThemeProvider>
    );
    wrapper
      .find(Button)
      .first()
      .simulate('click');
    expect(clickFunc).toHaveBeenCalled();
  });
});
