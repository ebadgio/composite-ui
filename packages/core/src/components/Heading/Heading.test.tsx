import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { Heading, HeadingBase } from './Heading';
import { ThemeProvider } from '../ThemeProvider';
import { baseTheme } from '../../config/theme';
import { px } from '../../util';

describe('Heading', () => {
  let wrapper: ReactWrapper;
  let text: string;

  beforeAll(() => {
    text = 'Test';
  });

  it('should handle prop level:1', () => {
    wrapper = mount(
      <ThemeProvider theme={baseTheme}>
        <Heading level={1}>{text}</Heading>
      </ThemeProvider>
    );

    expect(
      wrapper
        .find('h1')
        .first()
        .text()
    ).toEqual(text);

    expect(
      wrapper
        .find(HeadingBase)
        .first()
        .prop('fontSize')
    ).toEqual(px(baseTheme.fontSizes[5]));
  });

  it('should handle prop level:2', () => {
    wrapper = mount(
      <ThemeProvider theme={baseTheme}>
        <Heading level={2}>{text}</Heading>
      </ThemeProvider>
    );

    expect(
      wrapper
        .find('h2')
        .first()
        .text()
    ).toEqual(text);

    expect(
      wrapper
        .find(HeadingBase)
        .first()
        .prop('fontSize')
    ).toEqual(px(baseTheme.fontSizes[4]));
  });

  it('should handle prop level:3', () => {
    wrapper = mount(
      <ThemeProvider theme={baseTheme}>
        <Heading level={3}>{text}</Heading>
      </ThemeProvider>
    );

    expect(
      wrapper
        .find('h3')
        .first()
        .text()
    ).toEqual(text);

    expect(
      wrapper
        .find(HeadingBase)
        .first()
        .prop('fontSize')
    ).toEqual(px(baseTheme.fontSizes[3]));
  });

  it('should handle prop level:4', () => {
    wrapper = mount(
      <ThemeProvider theme={baseTheme}>
        <Heading level={4}>{text}</Heading>
      </ThemeProvider>
    );

    expect(
      wrapper
        .find('h4')
        .first()
        .text()
    ).toEqual(text);

    expect(
      wrapper
        .find(HeadingBase)
        .first()
        .prop('fontSize')
    ).toEqual(px(baseTheme.fontSizes[2]));
  });

  it('should handle prop level:5', () => {
    wrapper = mount(
      <ThemeProvider theme={baseTheme}>
        <Heading level={5}>{text}</Heading>
      </ThemeProvider>
    );

    expect(
      wrapper
        .find('h5')
        .first()
        .text()
    ).toEqual(text);

    expect(
      wrapper
        .find(HeadingBase)
        .first()
        .prop('fontSize')
    ).toEqual(px(baseTheme.fontSizes[1]));
  });

  it('should handle prop level:6', () => {
    wrapper = mount(
      <ThemeProvider theme={baseTheme}>
        <Heading level={6}>{text}</Heading>
      </ThemeProvider>
    );

    expect(
      wrapper
        .find('h6')
        .first()
        .text()
    ).toEqual(text);

    expect(
      wrapper
        .find(HeadingBase)
        .first()
        .prop('fontSize')
    ).toEqual(px(baseTheme.fontSizes[0]));
  });
});
