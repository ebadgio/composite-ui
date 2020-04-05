import * as React from 'react';
import { mount } from 'enzyme';
import { Box } from './Box';

describe('Box', () => {
  it('should render properly with right props and children', () => {
    const wrapper = mount(
      <Box width="200px" height="40px">
        Hello
      </Box>
    );
    expect(wrapper.prop('width')).toEqual('200px');
    expect(wrapper.prop('height')).toEqual('40px');
    expect(
      wrapper
        .find('div')
        .first()
        .hasClass(/(css-).+/)
    ).toEqual(true);
    expect(
      wrapper
        .find('div')
        .first()
        .text()
    ).toEqual('Hello');
  });

  it('should render an anchor element', () => {
    const wrapper = mount(<Box as="a">Hello</Box>);
    expect(
      wrapper
        .find('a')
        .first()
        .hasClass(/(css-).+/)
    ).toEqual(true);
    expect(
      wrapper
        .find('a')
        .first()
        .text()
    ).toEqual('Hello');
  });

  it('should render a custom component', () => {
    const SomeComponent = props => (
      <div {...props}>
        <p>Hello</p>
      </div>
    );

    const wrapper = mount(
      <Box width="200px" height="40px" as={SomeComponent} />
    );
    expect(
      wrapper
        .find(SomeComponent)
        .first()
        .hasClass(/(css-).+/)
    ).toEqual(true);
    expect(
      wrapper
        .find('p')
        .first()
        .text()
    ).toEqual('Hello');
  });
});
