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
});
