import React from 'react';
import { GlobalStyles, ThemeProvider, baseTheme } from '@composite-ui/core';
import Head from 'next/head';
import { useRouter } from 'next/router';
import DocsLayout from '../components/Layout';

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
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default Main;
