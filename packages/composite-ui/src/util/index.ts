import { get } from 'styled-system';

export const variantExtension = ({ variantKey, extensionKey, prop }) => {
  const fn = props => {
    if (props[prop]) {
      const path = [variantKey, props.variant, extensionKey].join('.');
      return get(props.theme, path);
    }
  };
  return fn;
};

export const px = (num: string | number): string => num + 'px';

export const em = (num: string | number): string => num + 'em';

export const matchesAbove = (width: string): boolean => {
  if (typeof window === 'undefined') {
    return false;
  }
  return window.matchMedia(`screen and (min-width: ${width})`).matches;
};

export const matchesBelow = (width: string) => {
  if (typeof window === 'undefined') {
    return false;
  }
  return window.matchMedia(`screen and (max-width: ${width})`).matches;
};

export const createMediaQueryAbove = (width: string) =>
  `@media screen and (min-width: ${width})`;

export const createMediaQueryBelow = (width: string) =>
  `@media screen and (max-width: ${width})`;
