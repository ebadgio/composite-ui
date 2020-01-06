type Merge<L, R> = R & Pick<L, Exclude<keyof L, keyof R>>;
declare module 'enzyme-adapter-react-16';

/* Styled system types */
type ResponsiveValue<T> = T | Array<T | null> | { [key: string]: T };
interface VariantStyleProps {
  variant?: ResponsiveValue<string>;
}
