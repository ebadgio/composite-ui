type Merge<L, R> = R & Pick<L, Exclude<keyof L, keyof R>>;
declare module 'enzyme-adapter-react-16';
