<img
  src="https://s3.amazonaws.com/composite-ui.com/icon.png"
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

Add the Emotion peer dependencies if not already installed:

```sh
// with npm
npm install @emotion/core @emotion/styled

// with yarn
yarn add @emotion/core @emotion/styled
```

## Usage

```jsx
import React from 'react';
import { ThemeProvider, baseTheme, Button } from 'composite-ui'; // ... or use a custom theme

function App() {
  return <Button variant="primary">Click me</Button>;
}

ReactDOM.render(
  <ThemeProvider theme={baseTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
```
