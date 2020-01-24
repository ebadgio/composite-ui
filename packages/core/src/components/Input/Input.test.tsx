import * as React from 'react';
import { mount } from 'enzyme';
import { Input } from './Input';

describe('Input', () => {
  let textInput: string;

  beforeAll(() => {
    textInput = 'Hello';
  });

  it('should render properly with right props and children', () => {
    const wrapper = mount(<Input height="35px" width="200px" />);
    expect(wrapper.prop('width')).toEqual('200px');
    expect(wrapper.prop('height')).toEqual('35px');
    expect(
      wrapper
        .find('input')
        .first()
        .hasClass(/(css-).+/)
    ).toEqual(true);
  });

  it('should handle text change', () => {
    let value = '';
    const changeFunc = jest.fn(e => {
      value = e.target.value;
    });
    const wrapper = mount(
      <Input height="35px" width="200px" onChange={changeFunc} />
    );
    wrapper
      .find(Input)
      .first()
      .simulate('change', { target: { value: textInput } });
    expect(changeFunc).toHaveBeenCalledTimes(1);
    expect(value).toEqual(textInput);
  });
});
