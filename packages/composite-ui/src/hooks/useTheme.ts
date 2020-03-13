import { ITheme } from './../config/theme';
import { useContext } from 'react';
import { ThemeContext } from '@emotion/core';

export const useTheme = (): ITheme => {
  const theme = useContext(ThemeContext) as ITheme;
  return theme;
};
