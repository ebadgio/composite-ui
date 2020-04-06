import { system, ResponsiveValue } from 'styled-system';

export const transform = system({
  transform: {
    property: 'transform'
  }
});

export type TransformProps = {
  transform?: ResponsiveValue<string>;
};
