import {
  width,
  height,
  color,
  border,
  space,
  fontSize,
  FontSizeProps,
  ColorProps,
  BorderProps,
  SpaceProps
} from 'styled-system';
import styled from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';
import { inputStyles, VariantStyleProps } from '../../config/variants';

export interface ITextareaProps
  extends Merge<ColorProps, React.HTMLAttributes<HTMLTextAreaElement>>,
    BorderProps,
    SpaceProps,
    FontSizeProps,
    VariantStyleProps {
  height?: number | string;
  width?: number | string; // needed in order to avoid typescript/react error for html input elem types
}

export const Textarea = styled('textarea', { shouldForwardProp })<
  ITextareaProps
>`
  box-sizing: border-box;
  &:focus {
    outline: none;
  }
  ${width}
  ${height}
  ${fontSize}
  ${color}
  ${border}
  ${space}
  ${inputStyles}
`;

Textarea.defaultProps = {
  width: '100%',
  height: '100px',
  padding: '8px',
  borderRadius: 1,
  fontSize: 1,
  variant: 'outline'
};
