import * as React from 'react';
import { mount } from 'enzyme';
import { Text } from '../src/components/Text';

describe('Text', () => {
  let color: string;
  let size: string;

  beforeAll(() => {
    color = '#fff';
    size = '16px';
  });

  it('should render properly with right props and children', () => {
    const wrapper = mount(
      <Text fontSize={size} color={color}>
        Hello
      </Text>
    );
    expect(
      wrapper
        .find('p')
        .first()
        .text()
    ).toEqual('Hello');
    expect(wrapper.prop('fontSize')).toEqual(size);
    expect(wrapper.prop('color')).toEqual(color);
    expect(
      wrapper
        .find('p')
        .first()
        .hasClass(/(css-).+/)
    ).toEqual(true);
  });
});
