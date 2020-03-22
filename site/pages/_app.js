import React from 'react';
import { GlobalStyles, ThemeProvider, baseTheme } from 'composite-ui';
import { useRouter } from 'next/router';
import { MDXProvider } from '@mdx-js/react';
import DocsLayout from '../components/Layout';
import MDX from '../components/MDX';

const Main = ({ Component, pageProps }) => {
  const router = useRouter();

  let Layout;
  if (router.pathname === '/') {
    Layout = React.Fragment;
  } else {
    Layout = DocsLayout;
  }

  return (
    <ThemeProvider theme={baseTheme}>
      <GlobalStyles />
      <MDXProvider components={MDX}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MDXProvider>
    </ThemeProvider>
  );
};

export default Main;
