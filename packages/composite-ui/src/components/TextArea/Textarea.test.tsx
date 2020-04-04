import * as React from 'react';
import { mount } from 'enzyme';
import { Textarea } from './Textarea';

describe('TextArea', () => {
  let textInput: string;

  beforeAll(() => {
    textInput = 'Hello';
  });

  it('should render properly with right props and children', () => {
    const wrapper = mount(<Textarea height="100px" width="100%" />);
    expect(wrapper.prop('width')).toEqual('100%');
    expect(wrapper.prop('height')).toEqual('100px');
    expect(
      wrapper
        .find('textarea')
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
      <Textarea height="100px" width="100%" onChange={changeFunc} />
    );
    wrapper
      .find(Textarea)
      .first()
      .simulate('change', { target: { value: textInput } });
    expect(changeFunc).toHaveBeenCalledTimes(1);
    expect(value).toEqual(textInput);
  });
});
