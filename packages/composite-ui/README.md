<img
  src="https://github.com/ebadgio/composite-ui/blob/master/site/public/assets/icon.png"
  width="100"
  heigh="100"
/>

# COMPOSITE UI

A modular, intuitive, and design system first React component library. Built on top of Emotion and Styled System.

[![CircleCI](https://circleci.com/gh/ebadgio/composite-ui.svg?style=svg)](https://circleci.com/gh/ebadgio/workflows/composite-ui)

## Installation

```sh
// with npm
npm install composite-ui

// with yarn
yarn add composite-ui
```

## Usage

```jsx
import React from 'react';
import { ThemeProvider, theme, Button } from 'composite-ui';
// ... or import a custom theme

function App() {
  return <Button variant="primary">Click me</Button>;
}

export default props => (
  <ThemeProvider theme={theme}>Hello world!</ThemeProvider>
);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
```
