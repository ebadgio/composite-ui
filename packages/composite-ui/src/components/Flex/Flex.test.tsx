import * as React from 'react';
import { mount } from 'enzyme';
import { Flex } from './Flex';

describe('Flex', () => {
  let text1: string;
  let text2: string;
  let width: string;
  let height: string;
  let ml: number;

  beforeAll(() => {
    text1 = 'Hello 1';
    text2 = 'Hello 2';
    width = '100px';
    height = '40px';
    ml = 2;
  });

  it('should render properly with correct children', () => {
    const wrapper = mount(
      <Flex justifyContent="separate">
        <div>{text1}</div>
        <div>{text2}</div>
      </Flex>
    );
    expect(
      wrapper
        .find('div')
        .first()
        .children().length
    ).toEqual(2);
    expect(
      wrapper
        .find('div')
        .first()
        .childAt(0)
        .text()
    ).toEqual(text1);
    expect(
      wrapper
        .find('div')
        .first()
        .childAt(1)
        .text()
    ).toEqual(text2);
    expect(wrapper.prop('justifyContent')).toEqual('separate');
    expect(
      wrapper
        .find('div')
        .first()
        .hasClass(/(css-).+/)
    ).toEqual(true);
  });

  it('should still support the Box props', () => {
    const wrapper = mount(
      <Flex width={width} height={height} ml={2}>
        {text1}
      </Flex>
    );
    expect(wrapper.prop('width')).toEqual(width);
    expect(wrapper.prop('height')).toEqual(height);
    expect(wrapper.prop('ml')).toEqual(ml);
  });
});
