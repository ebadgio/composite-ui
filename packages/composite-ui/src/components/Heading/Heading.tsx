import * as React from 'react';
import {
  get,
  typography,
  color,
  margin,
  MarginProps,
  TypographyProps,
  ColorProps
} from 'styled-system';
import styled from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';
import { fontSizeDefaults } from '../../config/theme';
import { px } from '../../util';

enum HeadingLevels {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6
}

export interface IHeadingProps
  extends ColorProps,
    TypographyProps,
    MarginProps {
  level?: HeadingLevels;
  theme?: string;
  children: React.ReactNode;
}

export const HeadingBase = styled('div', { shouldForwardProp })`
  font-weight: bold;
  ${color}
  ${typography}
  ${margin}
`;

HeadingBase.defaultProps = {
  as: 'h1',
  fontSize: px(fontSizeDefaults[5])
};

export const Heading = React.forwardRef(
  (props: IHeadingProps, ref: React.RefObject<HTMLElement>) => {
    let fontSize: string;
    let asProp: string;

    // If level is passed in, determine the corresponding 'as' and 'fontSize' props
    if (props.level) {
      const idx = 6 - props.level;
      fontSize = px(
        get(props.theme, `fontSizes.${idx}`, fontSizeDefaults[idx])
      );
      asProp = 'h' + props.level;
    }

    return <HeadingBase {...props} ref={ref} as={asProp} fontSize={fontSize} />;
  }
);

Heading.defaultProps = {
  color: 'text.primary',
  mb: '1em'
};
