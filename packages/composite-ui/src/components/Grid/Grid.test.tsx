import * as React from 'react';
import { mount } from 'enzyme';
import { Grid } from './Grid';

describe('Grid', () => {
  let text1: string;
  let text2: string;

  beforeAll(() => {
    text1 = 'hello';
    text2 = 'world';
  });

  it('should render proplery', () => {
    const wrapper = mount(
      <Grid gridGap={2} gridAutoFlow="row dense">
        <div>{text1}</div>
        <div>{text2}</div>
      </Grid>
    );

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
  });
});
