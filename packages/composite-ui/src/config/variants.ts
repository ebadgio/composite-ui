import { variant } from 'styled-system';
import { variantExtension } from '../util';

export const inputStyles = variant({
  key: 'inputs'
});

export const tabStyles = variant({
  key: 'tabs'
});

export const activeTabStyleFn = variantExtension({
  variantKey: 'tabs',
  extensionKey: 'activeStyles',
  prop: 'active'
});

/* Styled system types */
type ResponsiveValue<T> = T | Array<T | null> | { [key: string]: T };
export interface VariantStyleProps {
  variant?: ResponsiveValue<string>;
}
