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

export const px = (num: string | number) => num + 'px';
