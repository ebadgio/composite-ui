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
