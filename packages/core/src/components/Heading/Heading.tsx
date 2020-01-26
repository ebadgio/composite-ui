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
  extends Merge<ColorProps, React.HTMLAttributes<HTMLDivElement>>,
    TypographyProps,
    MarginProps {
  level?: HeadingLevels;
  theme?: string;
}

export const HeadingBase = styled('div', { shouldForwardProp })`
  ${color}
  ${typography}
  ${margin}
  font-weight: bold;
`;

HeadingBase.defaultProps = {
  as: 'h2',
  fontSize: px(fontSizeDefaults[4])
};

export const Heading = (props: IHeadingProps) => {
  let fontSize: string;
  let asProp: string;

  // If level is passed in, determine the corresponding 'as' and 'fontSize' props
  if (props.level) {
    const idx = 6 - props.level;
    fontSize = px(get(props.theme, `fontSizes.${idx}`, fontSizeDefaults[idx]));
    asProp = 'h' + props.level;
  }

  return <HeadingBase {...props} as={asProp} fontSize={fontSize} />;
};
