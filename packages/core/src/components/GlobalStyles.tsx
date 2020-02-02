import * as React from 'react';
import { Global, css } from '@emotion/core';

export const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
            'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
            'Helvetica Neue', sans-serif;
        }
        div {
          box-sizing: border-box;
        }
      `}
    />
  );
};
