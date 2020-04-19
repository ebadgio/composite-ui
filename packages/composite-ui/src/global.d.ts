declare type Merge<L, R> = R & Pick<L, Exclude<keyof L, keyof R>>;
declare type StringOrNumber = string | number;
