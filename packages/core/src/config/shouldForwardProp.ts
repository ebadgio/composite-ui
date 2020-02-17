import {
  createShouldForwardProp,
  props
} from '@styled-system/should-forward-prop';

export const shouldForwardProp = createShouldForwardProp([...props, 'open']);
