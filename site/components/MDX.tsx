import { Heading, Text } from 'composite-ui';
import Code from './Code';

/* Headings */
const H1 = props => <Heading level={1} {...props} />;
const H2 = props => <Heading level={2} {...props} />;
const H3 = props => <Heading level={3} {...props} />;

/* Text */
const P = props => <Text {...props} />;

export default {
  h1: H1,
  h2: H2,
  h3: H3,
  p: P,
  code: Code
};
