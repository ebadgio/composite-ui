import { system, ResponsiveValue } from 'styled-system';

export const transform = system({
  transform: {
    property: 'transform'
  }
});

export type TransformProps = {
  transform?: ResponsiveValue<string>;
};

// To allow aliases z-indices
export type ZIndexProps = {
  zIndex?: ResponsiveValue<string>;
};
