import * as React from 'react';
import { ThemeContext } from '@emotion/core';

interface IThemeProviderProps {
  theme: object | ((theme: object) => object);
  children: React.ReactNode;
}

export const ThemeProvider = (props: IThemeProviderProps) => {
  return (
    <ThemeContext.Consumer>
      {theme => {
        if (props.theme !== theme) {
          theme = { ...theme, ...props.theme };
        }
        return (
          <ThemeContext.Provider value={props.theme}>
            {props.children}
          </ThemeContext.Provider>
        );
      }}
    </ThemeContext.Consumer>
  );
};
